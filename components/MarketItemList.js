import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import Flag from 'react-native-flags';
import Styles from '../styles'


export default class MarketItemList extends React.Component {

	render() {
		const { market } = this.props;
		return (
			<TouchableOpacity
				onPress={
					() => { this.props.action() }
				}
			>
				<View
					style={Styles.SettingsMarket}
				>
					<Flag
						code={market.flag}
						size={32}
					/>
					<View style={Styles.SettingsMarginOnLabel}>
						<Text>{market.country}</Text>
						<Text>{market.url}</Text>
					</View>

				</View>
			</TouchableOpacity >
		);
	}
}
