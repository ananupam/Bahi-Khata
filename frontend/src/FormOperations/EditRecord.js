import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import '../pages/Main.css';

import { editRecord } from '../functionalities/FormFunction';


const EditRecord = React.memo((props) => {
    const [open, setOpen] = React.useState(false);
    const [record, setRecord] = React.useState(props.record);
	const [category, setCategory] = React.useState(props.record.category);

    const handleEditRecord = (e) => {
        setRecord({...record, [e.target.name]: e.target.value,})
    };

    const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    const editRecord = (e) => {
        e.preventDefault();
        console.log('editing record')
        const newRecord= {
            description: e.target.description.value,
			amount: Number(e.target.amount.value),
			category: category,
			date: e.target.date.value,
        };
        console.log('edited record')
        props.editRecord(props.record.id,newRecord);
        handleClose();
    };

    return (
        <div className='editRecord'>
            <Button onClick={handleOpen}>EDIT</Button>
            <Modal open={open}
            onClose={handleClose}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
            <div className='editRecord_form'>
            <form className='editRecord_formContainer'
					noValidate
					autoComplete='off'
					onSubmit={editRecord} >
                
                
                    <div className='editRecord_texts'>
                    <TextField 
                    label="Amount"
                    name="amount"
                    type='number'
                    style={{ width: '30%' }}
                    value={record.amount}
								onChange={handleEditRecord}
								InputLabelProps={{
									shrink: true,
								}}
                    />
                    
                    <TextField 
                        id="Date" 
                        label="Date"
                        type="date" 
                        name="date"
                        value={moment(new Date(record.date)).format('yyyy-MM-DD')}
					    onChange={handleEditRecord}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        style={{ width: '30%' }}/>

                    <FormControl className="form_formcontrol" 
                        style={{ width: '30%' }}>
                        <InputLabel 
                            id='demo-simple-select-label'>
                            Category
                        </InputLabel>
                        <Select 
                            labelId='demo-simple-select-label'
						    id='demo-simple-select' 
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}>
                            {props.categories.map((category) => (
                                <MenuItem 
                                    value={category.category} 
                                    key={category.id}>
                                    {category.category} 
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                    </div>
                
                    
                    <div>
                        <TextField label="Description"
                        type="text" 
                        name="description"
                        style={{ width: '90%'}}
                        value={record.description}
								onChange={handleEditRecord}
								InputLabelProps={{
									shrink: true,
								}}
                     />
                     </div>

                    <div className='appendRecordBtn'>
                        <Button variant='contained' type='submit'>EDIT RECORD </Button>
                    </div>
            
                </form>
            
            </div>
            </Modal>
        </div>
    )
});

const mapStateToProps = (state) => ({
	records: state.records,
	categories: state.categories,
});

const mapDispatchToProps = {
	editRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecord);
