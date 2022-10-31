import React from 'react';
import { connect } from 'react-redux';
import DeleteRecord from './DeleteRecord';
import EditRecord from './EditRecord';
import '../pages/Main.css';
import moment from 'moment';


const RecordBook = React.memo((props) => {
    
    console.log('props check')
    console.log(props)
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
                        props.filterRecord.length !==0
                            ? props.filterRecord.includes(
                                record.category
                            )
                            : props.records
                        )
                        .map((record)=> (
                            <tr key={record.id} style={{
                                backgroundColor:
                                    props.payRecords.includes(record) ===
                                    true
                                        ? '#eeeeee'
                                        : '#fff',
                            }}>
                                <td>{record.description}</td>
                                <td>{record.amount}</td>
                                <td>{record.category}</td>
                                <td>{moment(new Date(record.date)).format(
											'DD MMM yyyy'
										)}</td>
                                
                                <td><EditRecord record={record} /></td>
                                <td><DeleteRecord record={record} /></td>
                            </tr>
                        ))
                        
                    }
                </tbody>
                <tfoot>
                    <tr>total</tr>
                    <td>{props.records.reduce((a, b) => {
								return a + b['amount'];
							}, 0)}</td>
                    <td>Minimum Number of Bills: {props.payRecords.length}</td>
                </tfoot>
            </table>
        </div>
    )
})

const mapStateToProps = (state) => ({
	records: state.records,	
    payRecords: state.payRecords,
    filterRecord: state.filterRecord,
});

export default connect(mapStateToProps)(RecordBook);