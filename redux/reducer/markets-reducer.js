import * as ActionTypes from '../actions/markets/types';
import Markets from '../config/markets';

const initialState = {
	markets: Markets,
};

function marketsReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_MARKET_CONFIG:
			return Object.assign(
				{},
				state,
				{
					markets: markets
						.map(
							market => {
								if (market.key === action.key) {
									market.config = action.config
								}
							}
						)
				}
			);
		default:
			return state;
	}
}

export default marketsReducer;
