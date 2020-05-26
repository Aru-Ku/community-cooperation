/* eslint-disable react-native/no-inline-styles */
// import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import SearchResources from './src/screens/resources-search';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';
import Map from './src/screens/map';

import {
  HomeIcon,
  DonateIcon,
  SearchIcon,
  ChatIcon,
} from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ResourcesStackOptions = ({navigation}) => {
  return;
};

const DonationsStackOptions = ({navigation}) => {
  return;
};

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: 'red',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5,
  },
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName="Home"
    tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => <HomeIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="Donate"
      component={DonateStackLayout}
      options={{
        tabBarIcon: ({color}) => <DonateIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => <SearchIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name="ChatScreen"
      component={ChatTab}
      options={{
        tabBarIcon: ({color}) => <ChatIcon fill={color} />,
      }}
    />
  </Tab.Navigator>
);

const DonateStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Donations"
      component={MyResources}
      options={DonationsStackOptions}
    />
    <Stack.Screen name="Donate Resources" component={AddResource} />
    <Stack.Screen name="Edit Donation" component={EditResource} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search for Resources"
      component={SearchResources}
      options={ResourcesStackOptions}
    />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Map" component={Map} />
  </Stack.Navigator>
);

const ChatTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Chat / Get Help" component={Chat} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <NavigationContainer>
        <TabLayout />
      </NavigationContainer>
    );
  }
};

export default App;
