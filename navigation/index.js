import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from "react-navigation";
import {
	SharingListScreen,
	SettingsMarketListScreen,
	SettingsMarketScreen,
} from '../screens'

const SettingsStack = createStackNavigator(
	{
		SettingsMarketList: SettingsMarketListScreen,
		SettingsMarket: SettingsMarketScreen,
	},
	{
		initialRouteName: "SettingsMarketList",

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
		SharingList: SharingListScreen,
	},
	{
		initialRouteName: "SharingList",

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


