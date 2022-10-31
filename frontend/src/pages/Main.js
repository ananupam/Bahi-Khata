import React from 'react';
import { connect } from 'react-redux';
import RecordBook from '../FormOperations/RecordBook';
import AddRecord from '../FormOperations/addRecord';
import FilterRecord from '../FormOperations/FilterRecod';
import MonthlyChart from '../FormOperations/MonthlyChart';
import './Main.css';
import banner from '../Images/banner.png'
const Main = React.memo((props) => {
    return(
        <React.Fragment>
            <img className='banner_img' src={banner}></img>
            
            <div>
            {props.showChart === true ? (
					<MonthlyChart style={{ flex: 2, margin: 10 }} />
				) : (
					<MonthlyChart style={{ flex: 2, margin: 10 }} />
				)}
                <FilterRecord />
                <RecordBook/>
                <AddRecord/>
                
            </div>
        </React.Fragment>
    );
});

export default Main;