import { createReducer } from 'deox';

import * as actions from './actions';

export interface IAppState {
	version: number,
}

const initialState: IAppState = {
	version: 0,
}

export default createReducer(initialState, handle => [
	handle(actions.setVersion, (state, { payload }) => ({
		...state,
		version: payload,
	})),
]);
