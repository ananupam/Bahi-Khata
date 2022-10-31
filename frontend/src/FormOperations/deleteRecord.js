import React, { useState } from 'react';

import { connect } from 'react-redux';
import { deleteRecord } from '../functionalities/FormFunction';
import Button from '@mui/material//Button';
import '../pages/Main.css';

const DeleteRecord = React.memo((props) => {
    const handleDeleteRecord = () => {
        props.deleteRecord(props.record.id)
    
    }
    return ( 
    <div className='deleteRecord'>
    <Button className='deleteRecordBtn' onClick={handleDeleteRecord}>DELETE
    </Button>
    </div>
)
})

const mapDispatchToProps = {
	deleteRecord,
};

export default connect(null, mapDispatchToProps)(DeleteRecord);

