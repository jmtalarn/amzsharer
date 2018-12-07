import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import Styles from '../styles'
import Markets from '../config/markets';
import MarketItemList from '../components/MarketItemList';

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
							<MarketItemList
								market={item}
								action={
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

