import React from 'react';
import { payRecords } from '../functionalities/FormFunction';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PayRecords = React.memo((props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("here")
        console.log(e.target)
        console.log(e.target.monthlyBudget.value)

        props.payRecords(e.target.monthlyBudget.value, props.records);
    };
    return (
        <form className='PayRecordForm' 
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}>
            <div>
            <TextField 
                id='standard-secondary' 
                label='Budget' 
                type='number' 
                name='MonthlyBudget' 
                style={{ width: '60%',padding: 10 }}>
            </TextField>

            <Button 
                id="budget-form-button" 
                variant='contained'
                type='submit'> Pay Bill</Button>
            </div>
        </form>
    )
});

const mapStateToProps = (state) => ({
	records: state.records,
});

const mapDispatchToProps = {
	payRecords,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRecords);