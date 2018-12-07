import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import Styles from '../styles'
import Markets from '../config/markets';
import SettingsMarketItemList from '../components/SettingsMarketItemList';

export default class SettingsMarketListScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Select a market to setup',
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
							<SettingsMarketItemList
								market={item}
								goToMarket={
									() => {
										this.props.navigation.push('SettingsMarket', { market: item });
									}
								}
							/>
						)}
						keyExtractor={item => item.key}
					/>

				</View>
			</View>
		);
	}

}

