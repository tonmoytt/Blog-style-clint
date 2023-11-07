/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthConnect } from "../AUthProvider";

 

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthConnect);
    const location=useLocation()
    console.log(location.pathname);
    if(loading){
       return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
       return children
    }
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivetRoute;