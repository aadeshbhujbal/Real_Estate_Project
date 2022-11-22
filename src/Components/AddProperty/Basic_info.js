import React from 'react';
import CommonUI from '../Utilitys/CommonUI';
import '../Styles/Basicinfo.css';
export default function BasicInfo() {
    return (
        <div className='Cbusno'>
             <div>{<CommonUI />}</div>
        <div className='form'>
            <form>
                <div className='Basic-info'>
                    <div className='Basic-info-form'>
                        <label for="Property-type">Property Type</label>
                        <div>
                            <select className="select">
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
                            <select className="select">
                                <option value="">Select Negotiable</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='Basic-info-form'>
                        <label for='Price'>Price</label>
                        <div>
                            <input type='text' placeholder='Example:100000' />
                        </div>
                    </div>
                    <div className='Basic-info-form'>
                        <label for='Ownership'>Ownership</label>
                        <div>
                            <select className="select">
                                <option value="">Select Ownership</option>
                                <option value="Owner">Owner</option>
                                <option value="ThirdParty">ThirdParty</option>
                            </select>
                        </div>
                    </div>
                    <div className='Basic-info-form'>
                        <label for='Property Age'>Property Age</label>
                        <div>
                            <select className="select">
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
                            <select className="select">
                                <option value="">Property Approved</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='Basic-info-form'>
                        <label for='Property Description'>Property Description</label>
                        <div>
                            <input type='text' className='textarea' placeholder='Property Description' />
                        </div>
                    </div>
                    <div className='Basic-info-form'>
                        <label for='Bank Loan'>Bank Loan</label>
                        <div>
                            <select className="select">
                                <option value="">Bank Loan</option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>
                    </div>
               </div>
            </form>
        </div>
        </div>
    )
}