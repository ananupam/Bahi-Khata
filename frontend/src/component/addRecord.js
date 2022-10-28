import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addRecord } from '../functionalities/FormFunction';
import moment from 'moment';

const AddRecord = React.memo((props) => {
    const [date, setDate] = useState(new Date());
    const [category, setCategory]= useState('');

    const handleRecordAdding = (e) =>{
        e.preventDefault();
        const record = {
            id: props.records[props.records.length -1].id +1,
            description: e.target.description.value,
            amount: Number(e.target.amount.value),
            category: category,
            date: e.target.date.value,
        };
        props.addRecord(record);
        //console.log("record added")
    }
});