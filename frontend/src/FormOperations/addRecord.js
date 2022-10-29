import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addRecord } from '../functionalities/FormFunction';
import moment from 'moment';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddRecord = React.memo((props) => {
    const [date, setDate] = useState(new Date());
    const [category, setCategory]= useState('');

    const handleRecordAdding = (e) =>{
        console.log("adding record")
        console.log(props)
        e.preventDefault();
        
        const record = {
            id: props.records[props.records.length -1].id +1,
            description: e.target.description.value,
            amount: Number(e.target.amount.value),
            category: category,
            date: e.target.date.value,
        };
        props.addRecord(record);
        console.log("record added")

        //empty all fields
        e.target.amount.value='';
        e.target.date.value= '';
        setCategory('');
        e.target.description.value = null;
        
        //e.target.description.InputLabelProps = {
            //shrink: false,
        //};
        
    };

    //addition

    return(
        <div className='addRecord'>
            <div>

                <form className='addRecordForm' onSubmit={handleRecordAdding}>
                <h2> ADD RECORD</h2>
                
                <div className='formDescription_body'>
                    <TextField id="Amount" label="Amount"
                     variant="standard" type="number" name="amount"/>

                    <TextField id="Date" label="Date"
                     variant="standard" type="date" name="Date"
                     value={moment(date).format('yyyy-MM-DD')}
					 onChange={(e) => setDate(e.target.value)}
                     InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: '30%' }}/>

                    <FormControl className="form_formcontrol" style={{ width: '30%' }}>
                        <InputLabel id='demo-simple-select-label' variant="standard">Category</InputLabel>
                        <Select labelId='demo-simple-select-label'
						id='demo-simple-select' value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}>
                            {props.categories.map((category) => (
                                <MenuItem value={category.category} key={category.id}>
                                {category.category} </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>


                <div className='formDescription_description'>
                    <TextField id="Description" label="Description"
                     variant="standard" type="text" name="Description"/>
                </div>

                <div className='appendRecordBtn'>
                    <Button type='submit'>ADD RECORD </Button>
                </div>
                </form>
            </div>
            {/* to add the  monthly graph*/}
        </div>
    )

});

const mapStateToProps = (state) => ({
	records: state.records,
	categories: state.categories,
});

const mapDispatchToProps = {
	addRecord,
	//changeChartVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
