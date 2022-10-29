import React from 'react';
import { payRecords } from '../functionalities/FormFunction';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PayRecords = React.memo((props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.payRecords(e.target.monthlyBudget.value, props.records);
    };
    return (
        <form className='PayRecordForm' onSubmit={handleSubmit}>
            <h2>PAY DUE BILLS</h2>
            <TextField id='MonthlyBudget' type='number' name='MonthlyBudget'></TextField>
            <Button id="MonthlyBudgetButton" type='submit'> Pay Bill</Button>
        </form>
    )
});

const mapStateToProps = (state) => ({
	bills: state.records,
});

const mapDispatchToProps = {
	PayRecords,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRecords);