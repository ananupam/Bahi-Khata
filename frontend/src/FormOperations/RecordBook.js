import React from 'react';
import { connect } from 'react-redux';
import DeleteRecord from './DeleteRecord';
import EditRecord from './EditRecord';
import '../pages/Main.css';

const RecordBook = React.memo((props) => {
    

    return (
        <div className='RecordBook_table'>
            
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.records
                        .filter((record) => 
                        props.filterRecords.length !==0
                            ? props.filterRecords.includes(
                                record.category
                            )
                            : props.records
                        )
                        .map((record)=> (
                            <tr key={record.id}>
                                <td>{record.description}</td>
                                <td>{record.amount}</td>
                                <td>{record.category}</td>
                                <td>{record.date}</td>
                                
                                <td><EditRecord record={record} /></td>
                                <td><DeleteRecord record={record} /></td>
                            </tr>
                        ))
                        
                    }
                </tbody>
            </table>
        </div>
    )
})

const mapStateToProps = (state) => ({
	records: state.records,	
    payRecords: state.payRecords,
    filterRecords: state.filterRecords,
});

export default connect(mapStateToProps)(RecordBook);