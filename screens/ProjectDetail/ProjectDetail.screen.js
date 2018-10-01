import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
import styles from './ProjectDetail.style';
import { Container, Card, CardItem, Tabs, Tab, ScrollableTab, Fab, Body, Footer } from 'native-base';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HTML from 'react-native-render-html';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
const renderPagination = (index, total) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={styles.swiperCount}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}<Text>{` Photos`}</Text>
      </Text>
    </View>
  )
}

class ProjectDetail extends Component {
  render() {

    const { navigation } = this.props;
    const project = navigation.getParam('project', {});
    const unitConfig = {
      bhk: project.floorplans.map((floorplan) => floorplan.bhk).filter((bhk, index, self) => self.indexOf(bhk) === index),
      type: project.floorplans.length && project.floorplans[0] && project.floorplans[0].type
    }
    const currentDate = new Date().getTime();
    const launchDate = new Date(project.launch_date.date).getTime();
    const possessionDate = new Date(project.possession_date.date).getTime();
    const region = {
      latitude: parseFloat(project.lat),
      longitude: parseFloat(project.lng),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    let constructionStatus;
    if (currentDate < launchDate) {
      constructionStatus = 'Pre Lanch';
    } else if (currentDate > launchDate && currentDate < possessionDate) {
      constructionStatus = 'Under Construction';
    } else {
      constructionStatus = 'Completed, Ready to Move';
    }
    const LatLng = {
      latitude: parseFloat(project.lat),
      longitude: parseFloat(project.lng),
    }
    console.log(project);
    return (
      <Container>

        <KeyboardAwareScrollView>

          <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            loop={false} >
            {project.marketingplans.map((marketingplan) => (<View key={marketingplan.id} style={styles.slide}>
              <Image style={styles.image} source={{
                uri: marketingplan.image
              }} />
            </View>))}
          </Swiper>

          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{
              uri: project.logo
            }} />
            <View style={styles.logoContainerPadding}>
              <Text style={styles.titleHeading}>{project.name}</Text>
              <Text style={styles.titleLocation}>{project.location}, {project.city}</Text>
            </View>
          </View>

          <View style={styles.listView}>
            <View style={styles.listFirst}>

              <View style={styles.firstInner1}>
                <View>
                  <Text style={styles.headerText}>Construction status</Text>
                  <Text style={styles.mainText}>{constructionStatus}</Text>
                </View>
              </View>

              <View style={styles.firstInner2}>
                <View>
                  <Text style={styles.headerText}>Builder Name</Text>
                  <Text style={styles.mainText}>{project.builder_name}</Text>
                </View>
              </View>

            </View>

            <View style={styles.listSecond}>

              <View style={styles.firstInner1}>
                <Image style={styles.iconImage} source={require('../../images/1D.png')} />
                <View>
                  <Text style={styles.headerText}> Unit Configuration</Text>
                  <Text style={styles.mainText}>{unitConfig.bhk.join(',')} BHK</Text>
                  <Text style={styles.bottonText}>{unitConfig.type || ''}</Text>
                </View>
              </View>

              <View style={styles.firstInner2}>
                <Image style={styles.iconImage} source={require('../../images/2D.png')} />
                <View>
                  <Text style={styles.headerText}> Project Details</Text>
                  <Text style={styles.mainText}>{project.total_tower} Tower{`${project.total_tower > 1 ? 's' : ''}`}, {project.total_unit} Unit{`${project.total_unit > 1 ? 's' : ''}`}</Text>
                  <Text style={styles.bottonText}>{project.floorplans.length} Floors</Text>
                </View>
              </View>

            </View>

            <View style={styles.listThird}>

              <View style={styles.firstInner1}>

                <Image style={styles.iconImage} source={require('../../images/3D.png')} />
                <View>
                  <Text style={styles.headerText}>Total Project Area</Text>
                  <Text style={styles.mainText}>{project.total_area} Acres</Text>
                </View>
              </View>

              <View style={styles.firstInner2}>
                <Image style={styles.iconImage} source={require('../../images/4D.png')} />
                <View>
                  <Text style={styles.headerText}>Rera Status</Text>
                  <Text style={styles.mainText}>NOT AVAILABLE</Text>
                </View>

              </View>

            </View>

            <View style={styles.listFour}>

              <View style={styles.fourInner}>
                <View>
                  <Image style={styles.iconImage} source={require('../../images/5D.png')} />
                </View>
                <Text style={styles.headerText}>Rera Details</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.mainTextFour}>{project.rera_link}</Text>
              </View>

            </View>

          </View>
          {/*Background*/}
          <View style={styles.bgColor}></View>

          {/*----Card Tabs----*/}
          <View style={styles.tabSections}>
            <Text style={styles.floorText}>Floor Plans</Text>
            <Tabs style={styles.tabsStyle} transparent renderTabBar={() => <ScrollableTab />}>
              {project.floorplans.map((floorplan) => (<Tab heading={floorplan.title} style={styles.tabStyle}>
                <View style={styles.cardList}>
                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={{
                                uri: floorplan.floorplan_image
                              }} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>{floorplan.super_buildup_area} Sq.ft</Text>
                                </View>
                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>{floorplan.buildup_area || 'NA'}</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View style={styles.cardTextWhiteBg}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>{floorplan.liveablearea || 'NA'}</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> New Booking Price</Text>
                                  <Text style={styles.cardmainText}>{` ₹ ${floorplan.price}` || 'NA'}</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Resale Price</Text>
                                    <Text style={styles.cardmainText}>{floorplan.resale_price || 'Price on Request'}</Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </View>
                  </Card>
                </View>
              </Tab>))}
            </Tabs>
            <View style={styles.disclaimerTextBox}>
              <Text style={styles.disclaimerTextHeading}>
                Disclaimer:
                </Text>
              <Text style={styles.disclaimerTextDesc}>
                {' '}  Liveable area is 99acres defined based on internal calculations.
                </Text>
            </View>
          </View>

          {/*Background*/}
          <View style={styles.bgColor}></View>
          {/*---4----*/}
          <View>
            <Text style={styles.amenitiesText}>Amenities</Text>
            <View style={styles.amView}>
              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/6D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText}>Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/7D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/8D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>
            </View>


            <View style={styles.amView}>
              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/9D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText}>Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/12D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/11D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>
            </View>

            <View style={styles.amView}>
              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/6D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText}>Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/7D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>

              <View style={styles.amenitiesView} >
                <Image style={styles.amenitiescardImage} source={require('../../images/8D.png')} />
                <Text style={styles.headerText} >24/7 Power</Text>
                <Text style={styles.headerText} >Backup</Text>
              </View>
            </View>
          </View>

          <View style={styles.facuility}>
            <View style={styles.facuility1} >
              <Text style={styles.headerText} > Convenience & Security</Text>
              <Text style={styles.mainText} > CCTV Camera Security</Text>
              <Text style={styles.mainText} > Pipes Gas</Text>
              <Text style={styles.mainText} > Vastu Compliant</Text>
              <Text style={styles.mainText} > Video Door Security</Text>
            </View>
            <View style={styles.facuility2}>
              <Text style={styles.headerText} > Entertainment & Socializing</Text>
              <Text style={styles.mainText} > CCTV Camera Security</Text>
              <Text style={styles.mainText} > Pipes Gas</Text>
              <Text style={styles.mainText} > Vastu Compliant</Text>
              <Text style={styles.mainText} > Video Door Security</Text>
            </View>

          </View>


          {/*Background*/}
          <View style={styles.bgColor}></View>
          <View style={styles.scrollViewBottom}>
            <Text style={styles.amenitiesText}>Description</Text>
            <View>
              <View style={styles.summeryText}>
                <HTML html={project.summary} />
              </View>
            </View>
          </View>
          <View style={styles.bgColor}></View>
          <View style={styles.scrollViewBottom}>
            <Text style={styles.amenitiesText}>Trending Projects</Text>
            <ScrollView horizontal={true}>
              {project.project_cards.map((projectCard) => (<Card key={projectCard.id} style={styles.projectCards}>
                <CardItem >
                  <Body>
                    <View style={styles.scrollCard}>
                      <Image style={styles.scrollcardImage} source={{
                        uri: projectCard.image
                      }} />
                      <View style={styles.scrollText}>

                        <View>
                          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.mainText}>
                            {projectCard.title}
                          </Text>
                          <Text style={styles.subtitleText}>
                            {projectCard.subtitle}
                          </Text>
                          <Text numberOfLines={4} ellipsizeMode='tail' style={styles.headerText}>
                            {projectCard.description}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>))}
            </ScrollView>
          </View>
          <View style={styles.bgColor}></View>
          <View style={styles.scrollViewBottom}>
            <Text style={styles.amenitiesText}>Location</Text>
            <View >
              <MapView
                style={styles.mapStyle}
                region={region}
              >
                <Marker
                  coordinate={LatLng}
                  title="Marker"
                /></MapView>
            </View>
          </View>

        </KeyboardAwareScrollView>
        <Footer style={{ height: 50 }}>
          <View style={styles.footer}>
            <View style={styles.footerview}>
              <Image source={require('../../images/download.png')} />
              <Text style={styles.textColor}>Brochure</Text>
            </View>

            <View style={styles.footerview}>
              <Fab
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#59CDB5', marginLeft: -20, position: 'absolute', left: 5 }}
                position="bottomRight">
                <Image source={require('../../images/phone.png')} />
              </Fab>
            </View>
            <View style={styles.footerview}>
              <Image source={require('../../images/black-envelope.png')} />
              <Text style={styles.textColor}>send Message</Text>
            </View>
          </View>
        </Footer>
      </Container>

    );
  }
}

export default ProjectDetail;