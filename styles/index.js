import { StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerPadding: {
    padding: 10,
  },
  MarketItemListContent: {
    padding: 10,
    flexDirection: 'row',
  },
  SettingsMarginOnLabel: {
    marginLeft: 20,
  },
  MarketSettingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MarketSettingsSpacing: {
    marginTop: 10,
    marginBottom: 10,
  },

  MarketSettingsTag: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  MarketTagInput: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#e6e6e6',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
});
