import React from "react";
import UserPropertyCatalog from './AddProperty/UserPropertyCatalog'
import CommonUI from "../Utilitys/CommonUI";
export default function Loactioninfo() {
    return (
        <div className='Container'>
            <div>{<CommonUI />}</div>
            <div className='form'>
                <form>
                    <div className='Location-info'>
                        <div className='Location-info-form'>
                            <label for="email">Email</label>
                            <div>
                                <input type='text' placeholder='Email' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="City">City</label>
                            <div>
                                <input type='text' placeholder='City' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Area">Area</label>
                            <div>
                                <input type='text' placeholder='Area' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="PINCODE">PINCODE</label>
                            <div>
                                <input type='number' placeholder='Pincode' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Address">Address</label>
                            <div>
                                <input type='text' placeholder='Address' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Landmark">Landmark</label>
                            <div>
                                <input type='text' placeholder='Landmark' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Latitude">Latitude</label>
                            <div>
                                <input type='number' placeholder='Latitude' />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Longitude">Longitude</label>
                            <div>
                                <input type='number' placeholder='Longitude' />
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <Link to='/General_info'>
                            <button className='left'>Previous</button>
                        </Link>
                        <Link to='/UserPropertyCatalog'>
                            <button className='right'>AddProperty</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}