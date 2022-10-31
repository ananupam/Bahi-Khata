import Records from '../FormOperations/DummyRecords';
import Categories from '../FormOperations/DummyCategories';
import { add_record, edit_record, delete_record, filter_record } from './FormFunction';
import { pay_records } from './FormFunction';


export const ReduceRecord = (state= Records, action) => {
    switch (action.type) {
        case add_record:
            return [...state,action.record];
        case delete_record:
            state.splice(
                state.findIndex((record) => {
                    return record.id === action.id;
                }),
                1
            );
            return [...state];
        case edit_record:
            const index = state.findIndex((record) => record.id ===action.id);
            state[index] = {id: action.id, ...action.newRecord};
            return [...state];
        default:
            return state;

    }
};

export const ReduceCategories = ( state = Categories, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const ReducePayRecords = (state = [],action) => {
    switch(action.type) {
        case pay_records:
            state = [];
            action.records.sort((a ,b) => {
                return b.amount-a.amount;
            });
            return state;
        default:
            return state;
    }
};

export const ReduceFilterCategories = (state = [], action) => {
	switch (action.type) {
		case filter_record:
			state = [...action.categories];
			return state;
		default:
			return state;
	}
};
