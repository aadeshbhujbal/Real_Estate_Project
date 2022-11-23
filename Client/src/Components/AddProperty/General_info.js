import React from 'react';
//import Location_info from './AddProperty/Location_info';
import CommonUI from '../Utilitys/CommonUI';
import {AiFillCamera} from 'react-icons/ai'

export default function Generalinfo(){
    return (
        <div className='Container'>
            <div>{<CommonUI/>}</div>
            <div className='form'>
                <form>
                    <div className='General-info'>
                        <div className='General-info-form'>
                            <label for="name">Name</label>
                            <div>
                               <input type='text' placeholder='Name'/>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for="Mobile Number">Mobile Number</label>
                            <div>
                               <input type='number' placeholder='Enter Mobile Number'/>
                            </div>
                        </div>
                       
                        <div className='General-info-form'>
                            <label for='Posted By'>Posted By</label>
                            <div>
                                <select className="select">
                                    <option value="">Posted By</option>
                                    <option value="Owner">Owner</option>
                                    <option value="ThirdParty">ThirdParty</option>
                                </select>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='Sale Type'>Sale Type</label>
                            <div>
                                <select className="select">
                                    <option value="">Sale Type</option>
                                    <option value="Sale">Sale</option>
                                    <option value="Lease">Lease</option>
                                    <option value="Rent">Rent</option>
                                </select>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='Featured Package'>Featured Package</label>
                            <div>
                                <select className="select">
                                    <option value="">Featured Package</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='PPD Package'>PPD Package</label>
                            <div>
                                <select className="select">
                                    <option value="">PPD Package</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='Img'>
                            <img className='addimages' src='AiFillCamera'/>
                            <p>Add Photo</p>
                        </div>
                        
                    </div>
                    <div className='footer'>
                        <button className='left'>Previous</button>
                        <button className='right'>Save&Continue</button>

                    </div>
                </form>
            </div>
        </div>
    )
}