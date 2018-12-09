import * as ACTION from './types';
import { Button, View, Text, Switch, TextInput, AsyncStorage } from 'react-native';

const STORAGE_KEY = 'MARKET_CONFIG_';

export function loadInitialMarketsConfig() {
  return dispatch => {
    AsyncStorage.getAllKeys().then(allKeys => {
      allKeys.forEach(storage_key => {
        AsyncStorage.getItem(storage_key).then(result => {
          [ , key ] = storage_key.split(STORAGE_KEY);
          const config = JSON.parse(result);
          dispatch(updateMarketConfig(key, config));
        });
      })
    }).catch(error => console.error(error));
  }
}


export function updateMarketConfig(key, config) {
  return dispatch => {
    AsyncStorage
      .setItem(`${STORAGE_KEY}${key}`, JSON.stringify(config))
      .then(() => {
        return dispatch({
          type: ACTION.UPDATE_MARKET_CONFIG,
          action: { key, config }
        });
      })
      .catch(error => console.error(error));
  };
}
