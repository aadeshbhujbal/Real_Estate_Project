import React from 'react';
//import Location_info from './AddProperty/Location_info';
import CommonUI from '../Utilitys/CommonUI';
//import { AiFillCamera } from 'react-icons/ai'

export default function Generalinfo() {
    const [data, setdata] = useState({
        name: "",
        mobile: "",
        posted_by: "",
        sale_type: "",
        featured_package: "",
        ppd_package: "",
        img: 'file'
    })
    const submithandler = (e) => {
        e.preventDefault();
        localStorage.setItem('General_info', JSON.stringify(data));
        navigate("/Loactioninfo");
    }
    return (
        <div className='Container'>
            <div>{<CommonUI />}</div>
            <div className='form'>
                <form method='POST' onSubmit={submithandler}>
                    <div className='General-info'>
                        <div className='General-info-form'>
                            <label for="name">Name</label>
                            <div>
                                <input type='text' placeholder='Name' value={form.name} onChange={e => setdata({ ...data, name: e.target.value })} />
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for="Mobile Number">Mobile Number</label>
                            <div>
                                <input type='number' placeholder='Enter Mobile Number' value={form.mobile} onChange={e => setdata({ ...data, mobile: e.target.value })} />
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='Posted By'>Posted By</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, posted_by: e.target.value })}>
                                    <option value="">Posted By</option>
                                    <option value="Owner">Owner</option>
                                    <option value="ThirdParty">ThirdParty</option>
                                </select>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='Sale Type'>Sale Type</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, sale_type: e.target.value })}>
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
                                <select className="select" onChange={e => setdata({ ...data, featured_package: e.target.value })}>
                                    <option value="">Featured Package</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='General-info-form'>
                            <label for='PPD Package'>PPD Package</label>
                            <div>
                                <select className="select" onChange={e => setdata({ ...data, ppd_package: e.target.value })}>
                                    <option value="">PPD Package</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='Img'>
                            <img className='addimages' src='AiFillCamera' />
                            <p>Add Photo</p>
                        </div>

                    </div>
                    <div className='footer'>
                        <Link to='/Property_detail'>
                            <button className='left'>Previous</button>
                        </Link>
                        <button className='right'>Save&Continue</button>

                    </div>
                </form>
            </div>
        </div>
    )
}