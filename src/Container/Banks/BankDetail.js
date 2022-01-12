/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './bank.css';

export const BankDetail = (props) => {
    const { bankDetails } = props.location.state;
    if (!bankDetails) return <Redirect to="/all-banks" />
    return (
        <div className="bank-detail">
            <div className="card">
                <div className="card-header">
                    <h1>Bank Details</h1>
                </div>
                <div className="card-body">
                    <div className="info">
                        <span>Bank Name:</span> <h6>{bankDetails.bank_name}</h6>
                    </div>
                    <div className="info">
                        <span>Branch:</span> <h6>{bankDetails.branch}</h6>
                    </div>
                    <div className="info">
                        <span>IFSC:</span><h6>{bankDetails.ifsc}</h6>
                    </div>
                    <div className="info">
                        <span>Address:</span><h6>{bankDetails.address}</h6>
                    </div>
                    <div className="info">
                        <span>City: </span><h6>{bankDetails.city}</h6>
                    </div>
                    <div className="info">
                        <span>District: </span> : <h6>{bankDetails.district}</h6>
                    </div>
                </div>

            </div>
            <div><Link to="/all-banks">Back to list</Link></div>
        </div>
    )
}


export default BankDetail;

