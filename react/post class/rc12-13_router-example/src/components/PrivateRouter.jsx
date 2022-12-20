import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const PrivateRouter = () => {
//! Global state üzerinden gelcek 

const is_Authentication =false
//! Link to 
return  is_Authentication ? <Outlet/> : <Navigate to="/" />
// return  is_Authentication ? <Outlet/> : navigate to ="/" />
// naviga için useEffect içinde kullanılabilir.
  
  
}

export default PrivateRouter