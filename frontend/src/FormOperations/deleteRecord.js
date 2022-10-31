import React, { useState } from 'react';

import { connect } from 'react-redux';
import { deleteRecord } from '../functionalities/FormFunction';
import Button from '@mui/material//Button';

const DeleteRecord = React.memo((props) => {
    const handleDeleteRecord = () => {
        props.deleteRecord(props.record.id)
    
    }
    return ( 
        <div>
    <Button className='deleteRecordBtn' onClick={handleDeleteRecord}>DELETE
    </Button>
    </div>
)
})

const mapDispatchToProps = {
	deleteRecord,
};

export default connect(null, mapDispatchToProps)(DeleteRecord);

