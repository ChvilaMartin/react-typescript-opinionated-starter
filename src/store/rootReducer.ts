import { combineReducers } from 'redux';

import app, { IAppState } from './app/reducer';

export interface IReduxState {
	app: IAppState,
}

export default function createReducers<IReduxState>() {
	return combineReducers({
		app,
	})
}
