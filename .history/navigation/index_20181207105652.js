import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from "react-navigation";
import {
	SharingScreen,
	SettingsScreen,
} from '../screens'

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	});
SettingsStack.navigationOptions =
	{
		tabBarLabel: 'Settings',
		tabBarIcon: ({ focused, tintColor }) => {
			return (
				<MaterialIcons
					name='settings'
					color={tintColor}
					size={25}
				/>)
		}
	};

const SharingStack = createStackNavigator(
	{
		Settings: SharingScreen,
	}
);
SharingStack.navigationOptions =
	{
		tabBarLabel: 'Sharing',
		tabBarIcon: ({ focused, tintColor }) => {
			return (
				<MaterialIcons
					name='share'
					color={tintColor}
					size={25}
				/>)
		}
	};
const AppTabs = createBottomTabNavigator(
	{
		SharingStack,
		SettingsStack
	});



// const AppNavigator = createStackNavigator(
// 	{
// 		MoviesList: MoviesListScreen,
// 		MovieDetails: MovieTabs,
// 		MovieSearch: MovieSearchScreen,

// 	},
// 	{
// 		initialRouteName: "MovieSearch",

// 	}
// );

export default createSwitchNavigator({
	Main: AppTabs,
});


