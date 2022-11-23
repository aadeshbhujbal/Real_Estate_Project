//import React from 'react';
import CommonUI from '../Utilitys/CommonUI';
import '../Styles/Basicinfo.css';
import React, { useState, useEffect } from "react";
//import Loactioninfo from './Location_info';
import { Link, redirect } from 'react-router-dom';
//axios.defaults.headers.post["Content-Type"] = "multipart/form-date";
export default function BasicInfo() {
    const [data, setdata] = useState({
        property_type: "",
        negotiable: "",
        ownership: "",
        price: "",
        property_age: "",
        property_approved: "",
        property_description: "",
        bank_loan: ""
    })
    const submithandler = (e) => {
        e.preventDefault();
        localStorage.setItem('BASIC_INFO', JSON.stringify(data));
        navigate("/propertydeatils");
    }

    useEffect(() => {

        //check JWT in localstorage
        const JWT = localStorage.getItem('JWTkey');

        if (JWT.length == 0) {
            nevigate("/Login")
        }
        //if not nevigate login route

    }, [])
    return (
        <div className='Container'>
            <div>{<CommonUI />}</div>
            <div className='form'>
                <form method='POST' action='' onSubmit={submithandler}>
                    <div className='Basic-info'>
                        <div className='Basic-info-form'>
                            <label for="Property-type">Property Type</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, property_type: e.target.value })}>
                                    <option value="">Select Property Type</option>
                                    <option value="Plot">Plot</option>
                                    <option value="House">House</option>
                                    <option value="Flat">Flat</option>
                                </select>
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Negotiable'>Negotiable</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, negotiable: e.target.value })}>
                                    <option value="">Select Negotiable</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Price'>Price</label>
                            <div>
                                <input type='number' value={form.Price} placeholder='Example:100000' onChange={e => setdata({ ...data, price: e.target.value })} />
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Ownership'>Ownership</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, ownership: e.target.value })}>
                                    <option value="">Select Ownership</option>
                                    <option value="Owner">Owner</option>
                                    <option value="ThirdParty">ThirdParty</option>
                                </select>
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Property Age'>Property Age</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, property_age: e.target.value })}>
                                    <option value="">Select Property Age</option>
                                    <option value="Old">Old</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="New">New</option>
                                </select>
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Property Approved'>Property Approved</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, property_approved: e.target.value })}>
                                    <option value="">Property Approved</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Property Description'>Property Description</label>
                            <div>
                                <input type='text' className='textarea' value={form.property_description} placeholder='Property Description' onChange={e => setdata({ ...data, property_description: e.target.value })} />
                            </div>
                        </div>
                        <div className='Basic-info-form'>
                            <label for='Bank Loan'>Bank Loan</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, bank_loan: e.target.value })}>
                                    <option value="">Bank Loan</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <Link to='/UserPropertyCatalog'>
                            <button className='left'>cancel</button>
                        </Link>
                        <button className='right'>Save&Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}