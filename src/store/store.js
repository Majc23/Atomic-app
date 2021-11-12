import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/*import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';*/
import { mainReducer } from '../reducers/mainReducer';
import { regReducer } from '../reducers/regReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    main: mainReducer,
    reg: regReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);