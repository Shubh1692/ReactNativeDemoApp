import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import styles from './ProjectList.style';
import { fetchProjects } from '../../utils';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: []
    }
  }
  componentDidMount () {
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
      <View style={styles.container}>
        <Text> Please enter your note here</Text>
        <Button
          title="Project Detail"
          onPress={() =>
            navigate('ProjectDetail', { projectData: {} })
          }
        />
      </View>
    );
  }
}

export default ProjectList;