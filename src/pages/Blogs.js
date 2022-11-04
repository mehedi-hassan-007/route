import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import { Blogsdata } from '../data';

const Blogs = () => {
    // IT CAN BE DO BY USEING USEPARAMS OR USELOCATION 
    //I AM USING HERE USELOCATION AND COMMENTING OUT USEPARAMS
    // const {title}= useParams();
    const location = useLocation();
    console.log(location);
    // const [blogData, setBlogData] = useState("");

    // useEffect(() => {
    //     const bodyData= Blogsdata.filter((data)=> data.title === title)
    //     setBlogData(bodyData[0].body)
    // }, [])
    
    return (
        <div>
            <h1>{location.state.title} page</h1>
            <p>{location.state.body.slice(0, 500)}</p>
        </div>
    );
};

export default Blogs;