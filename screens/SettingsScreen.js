import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'

export default class SettingsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Settings',
		};
	};

	render() {

		return (
			<View style={Styles.container}>
				<Text>
					Settings Screen
				</Text>
			</View>
		);
	}

}

