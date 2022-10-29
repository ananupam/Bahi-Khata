import React from 'react';
import { connect } from 'react-redux';

import AddRecord from '../FormOperations/AddRecord';

const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <div>
                <AddRecord/>
            </div>
        </React.Fragment>
    );
});

export default Main;