import { ReduceRecord } from "./Reducer";
import { ReduceCategories } from "./Reducer";
import { combineReducers } from 'redux';
import { ReducePayRecords } from "./Reducer";
import { ReduceFilterCategories } from "./Reducer";

const allReducers = combineReducers({
    records: ReduceRecord,
    categories: ReduceCategories,
    payRecords: ReducePayRecords,
    filterRecords: ReduceFilterCategories,
});

export default allReducers;