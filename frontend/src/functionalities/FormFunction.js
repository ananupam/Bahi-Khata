export const add_record = "add_record";
export const addRecord = (record) => {
    return {
        type: add_record,
        record,
    };
};

export const delete_record = "delete_record";
export const deleteRecord = (id) => {
    return {
        type: delete_record,
        id,
    };
};


export const edit_record = "edit_record";
export const editRecord = (id, newRecord) => {
    return {
        type: edit_record,
        id,
        newRecord,
    };
};


export const filter_record = 'filter_record';
export const filterRecord = (categories) => {
    return {
        type: filter_record,
        categories,
    };
};

export const pay_records = 'pay_records';
export const payRecords = (monthlyBudget, records) => {
    return {type: pay_records, monthlyBudget, records};
};

export const show_chart = 'show_chart';

export const changeChartVisibility = () => {
    console.log('in change chart visible')
	return { type: show_chart };
};
