import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import Styles from '../styles'
import Markets from '../config/markets';
import SettingsMarket from '../components/SettingsMarket';

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
				<View>
					<FlatList
						data={Markets}
						renderItem={({ item }, index) => (
							<SettingsMarket
								market={item}
							/>
						)}
						keyExtractor={item => item.key}
					/>

				</View>
			</View>
		);
	}

}

