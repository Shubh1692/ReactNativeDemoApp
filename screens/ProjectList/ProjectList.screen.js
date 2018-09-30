import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './ProjectList.style';
import { fetchProjects } from '../../utils';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: []
    }
  }
  componentDidMount() {
    this.getProject();
  }
  getProject = async () => {
    const projectList = await fetchProjects();
    this.setState({
      projectList
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { projectList } = this.state;

    console.log('projectList', projectList)
    return (
      <Container>
        <Header />
        <Content >
          {projectList.map((project) => (<Card key={project.id}>
            <CardItem cardBody>
              <Icon style={styles.projectLike} active name="heart" />
              <TouchableHighlight onPress={() => navigate('ProjectDetail', {
                project
              })}>
                <Image source={{ uri: project.image }} style={styles.projectImage} /></TouchableHighlight>
            </CardItem>
            <TouchableHighlight style={styles.btn} onPress={() => navigate('ProjectDetail', {
              project
            })}>
              <CardItem >
                <Body>
                  <Text style={styles.projectTitle}>{project.name}</Text>
                  <Text style={styles.projectSubheader}>By {project.builder_name}</Text>
                  <Text style={styles.projectSubheader}>{project.location}, {project.city}</Text>
                </Body>
                <Right>
                  <Icon size={60} style={styles.projectCall} active name="call" />
                </Right>
              </CardItem>
            </TouchableHighlight>
          </Card>))}
        </Content>
      </Container>
    );
  }
}

export default ProjectList;