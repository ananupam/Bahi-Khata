import Reducers from '../FormOperations/DummyRecords';
import { add_record, edit_record, delete_record } from './FormFunction';

export const ReduceRecord = (state= Record, action) => {
    switch (action.type) {
        case add_record:
            return [...state,action.record];
        case delete_record:
            state.splice(
                state.findIndex((record) => {
                    record.id === action.id;
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
}