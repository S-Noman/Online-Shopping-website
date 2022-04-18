import { createStore  , compose, applyMiddleware} from "redux";
import logger from 'redux-logger'
import { allReducers } from "./reducers/index";



const middleWares= [logger];

//in order for middleware to work we need to call apply middleware:

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(allReducers, undefined, composedEnhancers)

