import React from 'react';
import { Button, View, Text, Switch, TextInput, AsyncStorage } from 'react-native';
import Flag from 'react-native-flags';
import Styles from '../styles'

export default class SettingsMarketScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const market = navigation.getParam('market');
		return {
			headerTitle: market.country
		}
	};
	constructor(props) {
		super(props);
		const market = props.navigation.getParam('market');
		this.state = Object.assign({}, { market }, { marketConfig: market.defaultConfig });
		this._retrieveData(market);
	}
	saveData = () => {
		this._storeData();
		this.props.navigation.goBack();
	}
	_storeData = async () => {
		const key = this.state.market.key;
		try {
			await AsyncStorage.setItem(`MARKET_${key}`, JSON.stringify(this.state.marketConfig));
			const value = await AsyncStorage.getItem(`MARKET_${key}`);
		} catch (error) {
			// Error saving data
			console.error(error);
		}
	}
	_retrieveData = async (market) => {
		try {
			const value = await AsyncStorage.getItem(`MARKET_${market.key}`);
			if (value !== null) {
				this.setState({ marketConfig: JSON.parse(value) });
			}
		} catch (error) {
			console.error(error);
		}
	}

	render() {

		return (
			<View style={Styles.container}>
				<View
					style={Styles.MarketSettingsRow}
				>
					<Flag
						code={this.state.market.flag}
						size={32}
					/>
					<View
						style={Styles.SettingsMarginOnLabel}
					>
						<Text>{this.state.market.url}</Text>
					</View>

				</View>
				<View style={Styles.MarketSettingsRow}>
					<Switch
						value={this.state.marketConfig.enabled}
						onValueChange={(value) => {
							const marketConfig = Object.assign({}, this.state.marketConfig, { enabled: value });
							this.setState(Object.assign({}, this.state, { marketConfig }));
						}}
					/>
					<Text
						style={Styles.SettingsMarginOnLabel}
					>
						Enable market on share
					</Text>
				</View>
				<View style={Styles.MarketSettingsTag}>
					<Text>
						Write the tag to be used on this market
					</Text>
					<TextInput
						style={Styles.MarketTagInput}
						onChangeText={(tag) => {
							const marketConfig = Object.assign({}, this.state.marketConfig, { tag });
							this.setState(Object.assign({}, this.state, { marketConfig }));
						}}
						value={this.state.marketConfig.tag}
					/>
				</View>
				<Button
					title="Save"
					onPress={() => { this.saveData(); }}
				/>

			</View>
		);
	}

}
