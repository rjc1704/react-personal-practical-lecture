import { createStore, combineReducers } from "redux";
import letters from "redux/modules/letters";
import member from "redux/modules/member";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({ letters, member });

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
