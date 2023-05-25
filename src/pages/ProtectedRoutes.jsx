
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Home from "./Home"


function ProtectedRoutes() {

    let [isReg, setReg] = useState(false)
    
    useEffect(()=>{
        let id = localStorage.getItem("id");

        if(id){
            setReg(true)
        }else{
           
            setReg(false)
        }
       
    },[])
  return (
    isReg ? <Outlet></Outlet> :<Home/>
  )
}

export default ProtectedRoutes