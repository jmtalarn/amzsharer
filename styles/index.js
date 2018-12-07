import { StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	SettingsMarket: {
		padding: 10,
		flexDirection: 'row',
	},
	SettingsMarginOnLabel: {
		marginLeft: 20,
	},
	MarketSettingsRow: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	MarketSettingsTag: {
		margin: 10,
		flexDirection: 'column',
	},
	MarketTagInput: {
		padding: 10,
		marginTop: 10,
		borderColor: '#e6e6e6',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
	}
});
