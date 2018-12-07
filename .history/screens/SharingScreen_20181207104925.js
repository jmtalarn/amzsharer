import React from 'react';
import { Button, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Styles from '../styles'

export default class SharingScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Sharing'
		}
	};


	render() {

		return (
			<View style={Styles.container}>
				<Text>
					Sharing Screen
				</Text>
			</View>
		);
	}

}

