import React from "react";
import { useNavigate } from "react-router-dom";


function Header(){
  const navigate = useNavigate()

    return(
        <>
        <h1>Twitter</h1>
        <button onClick={() => { navigate("/profile") }}>My Profile</button>
        <button onClick={() => { navigate("/") }}>Posts</button>

        </>
    )
}

export default Header