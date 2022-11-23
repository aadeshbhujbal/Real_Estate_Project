import React from 'react'
//import General_info from '.AddProperty/General_info';
import CommonUI from '../Utilitys/CommonUI';
export default function Propertydetail() {
    return (
        <div className='Container'>
            <div>{<CommonUI />}</div>
            <div className='form'>
                <form>
                    <div className='Property-info'>
                        <div className='Property-details-form'>
                            <label for="Length">Length</label>
                            <div>
                                <input type='number' placeholder='Example:1000' />
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Breadth'>Breadth</label>
                            <div>
                                <input type='number' placeholder='Example:1000' />
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='TotalArea'>Total Area</label>
                            <div>
                                <input type='number' placeholder='Example:100000' />
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Area Unit'>Area Unit</label>
                            <div>
                                <select className="select">
                                    <option value="">Area Unit</option>
                                    <option value="sq.m">Sq.m</option>
                                    <option value="sq.ft">Sq.ft</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='No of BHK'>Number of BHK</label>
                            <div>
                                <select className="select">
                                    <option value="">Number of BHK</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="2">3</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='No of floor'>Number of floor</label>
                            <div>
                                <select className="select">
                                    <option value="">Select no of floor</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Attached'>Attached</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Attached</option>
                                    <option value="Attached">Attached</option>
                                    <option value="Not Attached">Not Attached</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Western toilet'>Western toilet</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Western toilet</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Furnished'>Furnished</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Furnished</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="semi">Semi</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Car parking'>Car Parking</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Car Parking</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Lift'>Lift</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Lift</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Electricity'>Lift</label>
                            <div>
                                <input type='text' placeholder='Example:3Phase' />
                            </div>
                        </div>
                        <div className='Property-details-form'>
                            <label for='Facing'>Facing</label>
                            <div>
                                <select className="select">
                                    <option value="">Select Facing</option>
                                    <option value="North">North</option>
                                    <option value="East">East</option>
                                    <option value="West">West</option>
                                    <option value="South">South</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <Link to='/Basic_info'>
                            <button className='left'>Previous</button>
                        </Link>
                        <Link to='/General_info'>
                            <button className='right'>Save&Continue</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}