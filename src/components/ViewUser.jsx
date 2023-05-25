import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "../../api/api";
import { useNavigate } from "react-router-dom";

function ViewUser() {
        let [details, setDetails] = useState({});
        const navigate = useNavigate()
        useEffect(()=>{
            const headers = { Authorization: `Bearer ${import.meta.env.VITE_api}` };
            const id = localStorage.getItem('id')
            axios.get(`${API}/v1/contacts/${id}`,{headers}).then(res=>{
                setDetails(res?.data?.contact)
            })
        },[])
            console.log(details);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 flex justify-center">
                        <div className="  w-full md:w-6/12 ">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>E mail</td>
                                        <td>{details?.email}</td>

                                    </tr>
                                    <tr>
                                        <td>phone</td>
                                        <td>{}</td>

                                    </tr>
                                    <tr>
                                        <td>firstName</td>
                                        <td>{details.firstName}</td>

                                    </tr>
                                    <tr>
                                        <td>Last name</td>
                                        <td>{details.lastName}</td>

                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>{details?.fullNameLowerCase}</td>

                                    </tr>
                                    <tr>
                                        <td>dateOfBirth</td>
                                        <td>{details?.dateOfBirth}</td>

                                    </tr>
                                    <tr>
                                        <td>address1</td>
                                        <td> {details?.address1} </td>

                                    </tr>
                                    <tr>
                                        <td>city</td>
                                        <td> {details?.city} </td>

                                    </tr>
                                    <tr>
                                        <td>state</td>
                                        <td> {details?.state} </td>

                                    </tr>
                                    <tr>
                                        <td>country</td>
                                        <td>{details?.country}</td>

                                    </tr>
                                    <tr>
                                        <td>postalCode</td>
                                        <td> {details?.postalCode} </td>

                                    </tr>
                                    <tr>
                                        <td>companyName</td>
                                        <td>{details?.companyName} </td>

                                    </tr>
                                    <tr>
                                        <td>website</td>
                                        <td> {details?.website} </td>

                                    </tr>
                                    <tr>
                                        <td>tags</td>
                                        <td>{details?.tags}</td>

                                    </tr>

                                    <tr>
                                        <td>source</td>
                                        <td>{details?.source}</td>

                                    </tr>
                                    
                                    <tr>
                                        <td>customField</td>
                                        <td>{
                                            
                                        details?.customField?.map((data,i)=>{
                                            return (
                                                <h1 key={i}>{data.value}</h1>
                                            )
                                        })
                                            } </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 my-5 flex justify-center">
                        <button className="btn bg-[#6687bd] hover:bg-[#6687bd] text-white" onClick={()=>{navigate('/edit')}}>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUser