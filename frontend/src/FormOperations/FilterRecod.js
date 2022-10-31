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
		console.log('in handleApplyFilter')
		console.log(props)
        setCategory(e.target.value);
        props.filterRecord(e.target.values)
		console.log('out handleApplyFilter')
    };

    const handleRemoveFilter = () => {
		console.log('in handleRemoveFilter')
        setCategory([]);
        props.filterRecord([]);
    };

    return (
        <div className='filterList'>
            <div className='filterContainer'>
            
                <div className='fliteroption'>
                    <FormControl id='filter-select' sx={{ m: 1, minWidth: 200 }} >
                        <InputLabel id ='demo-mutiple-chip-label'
						style={{ minWidth: "max-content" , margin:10}}>
                            Filter Categories
                        </InputLabel>
                        <Select labelId='demo-mutiple-chip-label'
							id='demo-mutiple-chip'
							style={{ minWidth: "max-content" }}
							multiple
							value={category}
							onChange={handleApplyFilter}
                            input={<Input id='select-multiple-chip' />}
                            renderValue={(selected) => (
                                <div>
									{selected.map((value) => (
										<Chip
											key={value}
											name={value}
											label={value}
											
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
									value={categoryName.category}>
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
