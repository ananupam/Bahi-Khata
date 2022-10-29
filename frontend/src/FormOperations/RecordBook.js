import React from 'react';
import { connect } from 'react-redux';


const RecordBook = React.memo((props) => {
    

    return (
        <div className='RecordBook_table'>
            <h2>RECORD BOOK</h2>
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
                    {
                        props.records.map((record)=> (
                            <tr key={record.id}>
                                <td>{record.description}</td>
                                <td>{record.amount}</td>
                                <td>{record.category}</td>
                                <td>{record.date}</td>
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
});

export default connect(mapStateToProps)(RecordBook);