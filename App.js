/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createStackNavigator,
} from 'react-navigation';

import ProjectList from './screens/ProjectList/ProjectList.screen';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail.screen';

const App = createStackNavigator({
  ProjectList: { screen: ProjectList },
  ProjectDetail: { screen: ProjectDetail }, 
}, {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});
export default App;