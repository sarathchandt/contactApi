import axios from "axios";
import { useState } from "react"
import { API } from "../../api/api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {

        let [email, setEmail] = useState("");
        let [firstName, setFirstName] = useState("");
        let [lastName, setLastName] = useState("");
        let [phone, setPhone] = useState("");
        let [name, setName] = useState("");
        let [dob, setDOB] = useState("");
        let [address, setAddress] = useState("");
        let [city, setCity] = useState("");
        let [state, setState] = useState("");
        let [country, setCountry] = useState("");
        let [post, setPost] = useState("");
        let [company, setCompany] = useState("");
        let [website, setWebsite] = useState("");
        let [value, setValue] = useState("");
        const navigate = useNavigate()


        function submit(e){
            e.preventDefault()
            const headers = { Authorization: `Bearer ${import.meta.env.VITE_api}` };

            axios.post(`${API}/v1/contacts`,{
                email:email,
                phone:phone,
                firstName:firstName,
                lastName:lastName,
                name:name,
                dateOfBirth:dob,
                address1:address,
                city:city,
                state:state,
                country:country,
                postalCode:post,
                companyName:company,
                website:website,
                tags:[
                    "commodo",
        "veniam ut reprehenderit"
                ],
                source: "public api",
                customField:{
                    value : value
                }
            }, {headers}).then(res=>{
                console.log(res.data);
                localStorage.setItem("id",res?.data?.contact?.id);
                navigate('/view');
            }).catch(err=>{
                console.log(err);
                toast.error("Something went wrong")
            })
        }

    return (

        <>
                <ToastContainer />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12  flex justify-center">
                        <form className=" w-11/12 md:w-6/12" onSubmit={submit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                                    <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">phone number</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="phone number" value={phone} onChange={(e)=>{ setPhone(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">first name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="first name" value={firstName} onChange={(e)=>{setFirstName( e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">last name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="last name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">date of birth</label>
                                <input type="date" className="form-control" id="exampleInputPassword1" placeholder="dob" value={dob} onChange={(e)=>{setDOB(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">address - 1</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">city</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="city" value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">state</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="state" value={state} onChange={(e)=>{setState(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">country</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="country" value={country} onChange={(e)=>{setCountry(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">postalCode</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="postal code" value={post} onChange={(e)=>{setPost(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">companyName</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="company" value={company} onChange={(e)=>{setCompany(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">website</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="website" value={website} onChange={(e)=>{setWebsite(e.target.value)}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">customField value</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="value" value={value} onChange={(e)=>{setValue(e.target.value)}} required/>
                            </div>                         
                            <button type="submit" className="btn bg-[#6687bd] hover:bg-[#6687bd] text-white mb-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm