import { ReduceRecord } from "./Reducer";
import { ReduceCategories } from "./Reducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    records: ReduceRecord,
    categories: ReduceCategories,
});

export default allReducers;