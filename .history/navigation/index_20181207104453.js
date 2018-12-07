import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import {
	SharingScreen,
	SettingsScreen,
} from '../screens'

const settingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	}
);
const sharingStack = createStackNavigator(
	{
		Settings: SharingScreen,
	}
);
const AppTabs = createBottomTabNavigator(
	{
		Sharing: sharingStack,
		Settings: settingsStack
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



export default AppTabs;
