import React from 'react';
import { useNavigate } from "react-router-dom";

const contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>this is contact</h2>
            <button onClick= {()=> {navigate("/");}}> Go To Home Page </button>
        </div>
    );
};

export default contact;