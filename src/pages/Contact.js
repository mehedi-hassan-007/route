import React from 'react';
import { useNavigate } from "react-router-dom";

const contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>this is contact</h2>
            <button onClick= {()=> {navigate("/");}}> go to home page </button>
        </div>
    );
};

export default contact;