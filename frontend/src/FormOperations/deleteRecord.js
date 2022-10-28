import React, { useState } from 'react';

import { connect } from 'react-redux';
import { deleteRecord } from '../functionalities/FormFunction';


const DeleteRecord = React.memo((props) => {
    const handleDeleteRecord = () => {
        props.deleteRecord(props.record.id)
    
    }
    <button className='deleteRecordBtn' onClick={handleDeleteRecord}>
    </button>

})

