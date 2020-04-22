import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createReducers from 'store/rootReducer';
import rootSaga from 'store/rootSaga';

export default function createStore() {
	const sagaMiddleware = createSagaMiddleware();

	const middleware = composeWithDevTools({
		maxAge: 5000
	})(
		applyMiddleware(
			// Should always be first
			sagaMiddleware,
		)
	);

	const reducer = createReducers();

	const store = createReduxStore(reducer, middleware);

	sagaMiddleware.run(rootSaga);

	return store;
}
