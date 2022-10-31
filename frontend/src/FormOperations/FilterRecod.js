import React from 'react';
import { connect } from 'react-redux';

import { filterRecord } from '../functionalities/FormFunction';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material//Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

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
                </div>
                <div className='fliter option'>
                    <FormControl id='filter-select'>
                        <InputLabel id ='demo-mutiple-chip-label'>
                            Filter Categories
                        </InputLabel>
                        <Select labelId='demo-mutiple-chip-label'
							id='demo-mutiple-chip'
							multiple
							value={category}
							color='secondary'
							onChange={handleApplyFilter}
                            input={<Input id='select-multiple-chip' />}
                            renderValue={(selected) => (
                                <div style={{
									margin: 2,
									display: 'flex',
									flexWrap: 'wrap',
								}}>
									{selected.map((value) => (
										<Chip
											key={value}
											name={value}
											label={value}
											style={{
												margin: 2,
											}}
										/>
									))}
								</div>
                            )}
                            
                            MenuProps={{
								PaperProps: {
									style: {
										maxHeight: 224,
										width: 250,
									},
								},
							}}>
							{props.categories.map((categoryName) => (
								<MenuItem
									key={categoryName.id}
									value={categoryName.category}
									>
									{categoryName.category}
								</MenuItem>
							))}
						</Select>
                    </FormControl>

                    <Button
						variant='contained'
						color='secondary'
						onClick={handleRemoveFilter}>
						Remove Filter
					</Button>
                </div>
            </div>
        </div>
    )
})

const mapStateToProps = (state) => ({
	categories: state.categories,
});

const mapDispatchToProps = {
	filterRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRecord);
