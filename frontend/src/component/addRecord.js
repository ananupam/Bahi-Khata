import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addRecord } from '../functionalities/FormFunction';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';

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

        //empty all fields
        e.target.amount.value='';
        e.target.date.value= '';
        setCategory('');
        e.target.description.InputLabelProps = {
            shrink: false,
        }
    }
});