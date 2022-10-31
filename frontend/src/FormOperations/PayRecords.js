import React from 'react';
import { payRecords } from '../functionalities/FormFunction';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PayRecords = React.memo((props) => {
    const [monthlyBudget, setMonthlyBudget] = React.useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMonthlyBudget(monthlyBudget)
        console.log("here")
        console.log(monthlyBudget)
        console.log(props)
        props.payRecords(monthlyBudget, props.records);
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
                value={monthlyBudget}
                onChange = { (e) => {setMonthlyBudget(e.target.value)} }
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