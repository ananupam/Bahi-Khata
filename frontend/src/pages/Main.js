import React from 'react';
import { connect } from 'react-redux';
import RecordBook from '../FormOperations/RecordBook';
import AddRecord from '../FormOperations/AddRecord';

const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <div>
                <AddRecord/>
                <RecordBook/>
            </div>
        </React.Fragment>
    );
});

export default Main;