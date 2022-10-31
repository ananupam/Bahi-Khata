import React, { useState } from 'react';

import PayRecords from './PayRecords';
import { changeChartVisibility } from '../functionalities/FormFunction';
import { connect } from 'react-redux';
import { addRecord } from '../functionalities/FormFunction';
import moment from 'moment';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import mainImg from '../Images/mainImg.png'
import '../pages/Main.css'

const AddRecord = React.memo((props) => {
    const [category, setCategory] = React.useState('');
	const [date, setDate] = React.useState(new Date());

    const handleRecordAdding = (e) =>{
        e.preventDefault();
        const record = {
			id: props.records[props.records.length - 1].id + 1,
			description: e.target.description.value,
			amount: Number(e.target.amount.value),
			category: category,
			date: e.target.date.value,
		};
		props.addRecord(record);
        console.log("adding record")
        console.log(e.target)
        
        console.log("check check")
        
        console.log("record added")
        
        //empty all fields
        e.target.amount.value='';
        e.target.date.value= '';
        setCategory('');
        e.target.description.value = null;
        
        e.target.description.InputLabelProps = {
            shrink: false,
        };
        
    };

    const handleShowChart = (event) => {
		event.preventDefault();
        console.log("in handle show chart visibility")
		props.changeChartVisibility();
        console.log("out handleshow chart visibility")
	};

    //addition

    return(
        <div className='addRecord'>
            <div className='payrecord_section'>
            <PayRecords/>
            </div>
            
            <div className='flexbox_addrecord'>
                
                {/*<li><img className='addrecord_main'src={mainImg}></img></li>*/}
                
                <form className='addRecord_formContainer'
					noValidate
					autoComplete='off'
					onSubmit={handleRecordAdding} >
                
                
                    <div className='addRecord_texts'>
                    <TextField 
                    label="Amount"
                    name="amount"
                    type='number'
                    style={{ width: '30%' }}
                    />
                    
                    <TextField 
                        id="Date" 
                        label="Date"
                        type="date" 
                        name="date"
                        value={moment(date).format('yyyy-MM-DD')}
					    onChange={(e) => setDate(e.target.value)}
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
                     />
                     </div>

                    <div className='appendRecordBtn'>
                        <Button variant='contained' type='submit'>ADD RECORD </Button>
                    </div>
            
                </form>
            
            </div>
            <div
				className='root form-container'
				style={{
					padding: '0 20px',
				}}>
				<Button
					id='form-button'
					variant='contained'
					color='primary'
					onClick={handleShowChart}>
					Get Time Series Chart
				</Button>
			</div>
            
            
            {/* to add the  monthly graph*/}
        </div>
    )

});

const mapStateToProps = (state) => ({
	records: state.records,
	categories: state.categories,
});

const mapDispatchToProps = {
	addRecord,
	changeChartVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecord);
