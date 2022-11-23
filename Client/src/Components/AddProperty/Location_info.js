import React from "react";
import UserPropertyCatalog from './AddProperty/UserPropertyCatalog'
import CommonUI from "../Utilitys/CommonUI";
export default function Locationinfo() {
    const [data, setdata] = useState({
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: ""
    })
    const submithandler = (e) => {
        e.preventDefault();
        localStorage.setItem('Location_info', JSON.stringify(data));
        navigate("/UserPropertyCatalog");
    }
    return (
        <div className='Container'>
            <div>{<CommonUI />}</div>
            <div className='form'>
                <form method="POST" onSubmit={submithandler}>
                    <div className='Location-info'>
                        <div className='Location-info-form'>
                            <label for="email">Email</label>
                            <div>
                                <input type='text' placeholder='Email' value={form.email} onChange={e => setdata({ ...data, email: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="City">City</label>
                            <div>
                                <input type='text' placeholder='City' value={form.city} onChange={e => setdata({ ...data, city: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Area">Area</label>
                            <div>
                                <input type='text' placeholder='Area' value={form.area} onChange={e => setdata({ ...data, area: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="PINCODE">PINCODE</label>
                            <div>
                                <input type='number' placeholder='Pincode' value={form.pincode} onChange={e => setdata({ ...data, pincode: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Address">Address</label>
                            <div>
                                <input type='text' placeholder='Address' value={form.address} onChange={e => setdata({ ...data, address: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Landmark">Landmark</label>
                            <div>
                                <input type='text' placeholder='Landmark' value={form.landmark} onChange={e => setdata({ ...data, landmark: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Latitude">Latitude</label>
                            <div>
                                <input type='number' placeholder='Latitude' value={form.latitude} onChange={e => setdata({ ...data, latitude: e.target.value })} />
                            </div>
                        </div>
                        <div className='Location-info-form'>
                            <label for="Longitude">Longitude</label>
                            <div>
                                <input type='number' placeholder='Longitude' value={form.longitude} onChange={e => setdata({ ...data, longitude: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <Link to='/General_info'>
                            <button className='left'>Previous</button>
                        </Link>
                        <button className='right'>AddProperty</button>
                    </div>
                </form>
            </div>
        </div>
    )
}