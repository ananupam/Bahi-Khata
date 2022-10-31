import { ReduceRecord } from "./Reducer";
import { ReduceCategories } from "./Reducer";
import { combineReducers } from 'redux';
import { ReducePayRecords } from "./Reducer";
import { ReduceFilterCategories } from "./Reducer";
import { ShowChartReducer } from "./Reducer";

const allReducers = combineReducers({
    records: ReduceRecord,
    categories: ReduceCategories,
    showChart: ShowChartReducer,
    payRecords: ReducePayRecords,
    filterRecord: ReduceFilterCategories,
});

export default allReducers;