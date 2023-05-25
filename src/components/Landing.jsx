import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Landing() {

    const navigate = useNavigate()
    useEffect(()=>{
        let id = localStorage.getItem("id")
        id ? null : toast.warning("Please register ")

    },[])

  return (
    <>
            <ToastContainer />

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 flex justify-center cursor-pointer" onClick={()=>{navigate('/register')}}>
                <div className="bg-[#6687bd] m-3 w-11/12  mt-5  text-white flex justify-center rounded">
                    <h1 className=" p-4   text-2xl">Register </h1>
                </div>
            </div>
            <div className="col-md-6 flex justify-center cursor-pointer">
                <div className="bg-[#6687bd] m-3 w-11/12  mt-5  text-white flex justify-center rounded">
                    <h1 className=" p-4   text-2xl" onClick={()=>{navigate('/view')}}>View Contact </h1>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Landing