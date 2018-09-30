import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ProjectDetail.style';
import { Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, FooterTab, Button, ScrollableTab, Icon, Fab, Left, Body, Right, Footer } from 'native-base';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={styles.swiperCount}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}<Text>Photos</Text>
      </Text>
    </View>
  )
}

class ProjectDetail extends Component {

  render() {
    const { params } = this.props.navigation.state
    console.log(params);
    return (
      <Container>
        <KeyboardAwareScrollView>

          <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            loop={false} >
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../../images/1.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../../images/2.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../../images/3.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../../images/4.jpg')} />
            </View>
          </Swiper>

          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/logo.jpg')} />
            <Text style={styles.titleHeading}>Virasat Affluence</Text>
            <Text>Mumbai</Text>
          </View>

          <View style={styles.listView}>
            <View style={styles.listFirst}>

              <View style={styles.firstInner1}>
                <View>
                  <Text style={styles.headerText}>Construction status</Text>
                  <Text style={styles.mainText}>Ready to move</Text>
                  <Text style={styles.bottonText}>Completed in Oct 2015</Text>
                </View>
              </View>

              <View style={styles.firstInner2}>
                <View>
                  <Text style={styles.headerText}>Builder Name</Text>
                  <Text style={styles.mainText}>Virasat Builders</Text>
                </View>
              </View>

            </View>

            <View style={styles.listSecond}>

              <View style={styles.firstInner1}>
                <Image style={styles.iconImage} source={require('../../images/1D.png')} />
                <View>
                  <Text style={styles.headerText}> Unit Configuration</Text>
                  <Text style={styles.mainText}>2, 3 BHK</Text>
                  <Text style={styles.bottonText}>Apartment</Text>
                </View>
              </View>

              <View style={styles.firstInner2}>
                <Image style={styles.iconImage} source={require('../../images/2D.png')} />
                <View>
                  <Text style={styles.headerText}> Project Details</Text>
                  <Text style={styles.mainText}>2 Towers, 40 Units</Text>
                  <Text style={styles.bottonText}>5 Floors</Text>
                </View>
              </View>

            </View>

            <View style={styles.listThird}>

              <View style={styles.firstInner1}>

                <Image style={styles.iconImage} source={require('../../images/3D.png')} />
                <View>
                  <Text style={styles.headerText}>Total Project Area</Text>
                  <Text style={styles.mainText}>4.13 Acres</Text>
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
                <Text style={styles.mainTextFour}>http:/...</Text>
              </View>

            </View>

          </View>
          {/*Background*/}
          <View style={styles.bgColor}></View>

          {/*----Card Tabs----*/}
          <View style={styles.tabSections}>
            <Text style={styles.floorText}>Floor Plans</Text>
            <Tabs style={styles.tabsStyle} transparent renderTabBar={() => <ScrollableTab />}>
              <Tab heading="2BHK" style={styles.tabStyle}>
                <View style={styles.cardList}>

                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={require('../../images/4.jpg')} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq.ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View >
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>NA</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq. ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
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
              </Tab>
              <Tab heading="2BHK" style={styles.tabStyle}>
                <View style={styles.cardList}>

                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={require('../../images/4.jpg')} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq.ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View >
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>NA</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq. ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
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
              </Tab>
              <Tab heading="2BHK" style={styles.tabStyle}>
                <View style={styles.cardList}>

                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={require('../../images/4.jpg')} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq.ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View >
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>NA</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq. ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
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
              </Tab>
              <Tab heading="3BHK" style={styles.tabStyle}>
                <View style={styles.cardList}>

                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={require('../../images/4.jpg')} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq.ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View >
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>NA</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq. ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
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
              </Tab>
              <Tab heading="2BHK" style={styles.tabStyle}>
                <View style={styles.cardList}>

                  <Card>
                    <View style={styles.cardItem}>
                      <CardItem>
                        <Body>
                          <View style={styles.cardBody}>
                            <View style={styles.cardImageView} >
                              <Image style={styles.cardImage} source={require('../../images/4.jpg')} />
                            </View>
                            <View style={styles.textContent}>
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq.ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
                                  </View>
                                </View>
                              </View>
                              {/*---2---*/}
                              <View >
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Liveable Area</Text>
                                  <Text style={styles.cardmainText}>NA</Text>
                                </View>
                              </View>
                              {/*---3----*/}
                              <View style={styles.cardText}>
                                <View style={styles.cardTextInner1}>
                                  <Text style={styles.headerText}> Super Built-up area</Text>
                                  <Text style={styles.cardmainText}>1036 Sq. ft</Text>
                                </View>

                                <View style={styles.firstInner2}>
                                  <View>
                                    <Text style={styles.headerText}> Build-up Area</Text>
                                    <Text style={styles.cardmainText}>NA</Text>
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
              </Tab>
            </Tabs>
          </View>

          {/*Background*/}
          <View style={styles.bgColor}></View>
          {/*---4----*/}
          <View>
            <Text style={styles.AmenitiesText}>Amenities</Text>
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

        </KeyboardAwareScrollView>
        <Footer>
          <View style={styles.footer}>
            <View style={styles.footerview}>

              <View style={styles.footerview}>
                <Icon type="FontAwesome" name='download' />
                <Text style={styles.textColor}>Brochure</Text>
              </View>

              {/* <Fab
                direction="up"
                style={styles.fabPhoneIcon}>
                <Icon type="FontAwesome" name='home' />
                <Icon ios={'ios-home'} android={'md-home'} style={styles.icon} />}
              </Fab> */}
              <View>
                <Icon type="FontAwesome" name='download' />
                <Text style={styles.textColor}>Brochure</Text>
              </View>

            </View>
          </View>

        </Footer>
      </Container>

    );
  }
}

export default ProjectDetail;