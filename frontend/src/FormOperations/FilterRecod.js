import React from 'react';
import { connect } from 'react-redux';

import { filterRecord } from '../functionalities/FormFunction';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const FilterRecord= React.memo((props) => {
    const [category,setCategory] = React.useState([]);

    const handleApplyFilter = (e) => {
        setCategory(e.target.value);
        props.filterRecord(e.target.values)
    };

    const handleRemoveFilter = () => {
        setCategory([]);
        props.filterRecord([]);
    };

    return (
        <div className='filterList'>
            <div className='filterContainer'>
                <div className='main_header'>
                    <h1>BAHI_KHATA</h1>
                </div>
                <div className='fliter option'>
                    <FormControl id='filter-select'>
                        <InputLabel id ='demo-mutiple-chip-label'>Filter Categories</InputLabel>
                        <Select labelId='demo-mutiple-chip-label'
							id='demo-mutiple-chip'
							multiple
							value={category}
							color='secondary'
							onChange={handleApplyFilter}
                            input={<Input id='select-multiple-chip' />}
                            
                            />
                    </FormControl>
                </div>
            </div>
        </div>
    )
})