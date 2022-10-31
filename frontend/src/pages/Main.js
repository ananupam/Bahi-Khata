import React from 'react';
import { connect } from 'react-redux';
import RecordBook from '../FormOperations/RecordBook';
import AddRecord from '../FormOperations/AddRecord';
import FilterRecord from '../FormOperations/FilterRecod';
import './Main.css';
import banner from '../Images/banner.png'
const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <img className='banner_img' src={banner}></img>
            
            <div>
                <FilterRecord />
                <RecordBook/>
                <AddRecord/>
                
            </div>
        </React.Fragment>
    );
});

export default Main;