import React from 'react';
import { connect } from 'react-redux';
import RecordBook from '../FormOperations/RecordBook';
import AddRecord from '../FormOperations/AddRecord';
import FilterRecord from '../FormOperations/FilterRecod' 
const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <FilterRecord />
            <div>
                <AddRecord/>
                <RecordBook/>
            </div>
        </React.Fragment>
    );
});

export default Main;