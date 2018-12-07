import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import {
	SharingScreen,
	SettingsScreen,
} from '../screens'

const AppTabs = createBottomTabNavigator(
	{
		Sharing: SharingScreen,
		Settings: SettingsScreen
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
