import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import marketsReducer from './reducers/markets-reducer';

const rootReducer = combineReducers(
	{
		markets: marketsReducer,
	}
);


const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
	)
);

export default store;
