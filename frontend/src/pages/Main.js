import React from 'react';
import { connect } from 'react-redux';

import AddRecord from '../FormOperations/AddRecord';

const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <div>
                <AddRecord style={{ flex: 1.25, margin: 10 }}/>
            </div>
        </React.Fragment>
    );
});

export default Main;