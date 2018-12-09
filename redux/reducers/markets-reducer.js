import * as ActionTypes from '../actions/markets/types';
import Markets from '../../config/markets';

const initialState = {
  list: Markets,
};

function marketsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_MARKET_CONFIG:
      return Object.assign(
        {},
        state,
        {
          list: Markets
            .map(
              market => {
                if (market.key === action.key) {
                  market.config = action.config
                }
                return market;
              }
            )
        }
      );
    default:
      return state;
  }
}

export default marketsReducer;
