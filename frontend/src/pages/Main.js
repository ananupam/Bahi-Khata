import React from 'react';
import { connect } from 'react-redux';

import AddRecord from '../FormOperations/AddRecord';

const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <div>
                <h1> in the main</h1>
                <AddRecord/>
            </div>
        </React.Fragment>
    );
});

export default Main;