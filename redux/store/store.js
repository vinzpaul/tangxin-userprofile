import { createStore, combineReducers } from 'redux';
import modelsReducer from "../reducers/ModelsReducer";

const rootReducer = combineReducers({
    models: modelsReducer
})

export const store = createStore(rootReducer);
