import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import Styles from '../styles'
import MarketItemList from '../components/MarketItemList';
import { connect } from 'react-redux';
import { loadInitialMarketsConfig } from '../redux/actions/markets';

class SettingsMarketListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Select a market to setup',
    };
  };
  componentDidMount() {
    this.props.loadInitialMarketsConfig();
  }
  render() {

    return (
      <View style={Styles.container}>
        <Text>
          Settings Screen
				</Text>
        <View>
          <FlatList
            data={this.props.markets}
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
            keyExtractor={item => return item.key }
          />

        </View>
      </View>
    );
  }

}

const MarketsListState = function (state, props) {

  const { markets: { list = [] } } = state;

  return {
    markets: list
  };
};
const MarketsListDispatch = function (dispatch) {
  return {
    loadInitialMarketsConfig: () => {
      dispatch(loadInitialMarketsConfig());
    },
  };
};
export default connect(
  MarketsListState,
  MarketsListDispatch
)(SettingsMarketListScreen);
