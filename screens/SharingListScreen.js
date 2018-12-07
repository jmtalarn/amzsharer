import React from 'react';
import { Button, View, Text, AsyncStorage, FlatList } from 'react-native';
import MarketItemList from '../components/MarketItemList';
import Markets from '../config/markets';
import Styles from '../styles'
import { AppLoading } from 'expo';
export default class SharingListScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Share ...'
		}
	};
	constructor(props) {
		super(props);
		this.state = { markets: [], isReady: false };
		this._getMarkets();
	}
	_getMarkets = () => {

		AsyncStorage.getAllKeys().then(allKeys => {
			Promise.all(Markets.map(
				async (market) => {
					if (allKeys.indexOf(`MARKET_${market.key}`) !== -1) {
						const config = await AsyncStorage.getItem(`MARKET_${market.key}`);
						market.config = JSON.parse(config);
						console.log('CONFIG', market);
						return market;
					}
					else {
						console.log('NO CONFIG', market);
						return market;
					}
				}
			)).then(markets => {

				this.setState(
					{
						markets: markets.filter(market => market.config.enabled),
						isReady: true
					}
				);
			});
		});


	}

	render() {
		console.log(this.state.markets);
		if (this.state.isReady) {
			return (
				<View style={Styles.container}>
					<FlatList
						data={this.state.markets}
						renderItem={({ item }, index) => (
							<MarketItemList
								market={item}
								action={
									() => {
										null
									}
								}
							/>
						)}
						keyExtractor={item => item.key}
					/>
				</View>
			);
		} else {
			return (
				<AppLoading />
			);
		}

	}

}

