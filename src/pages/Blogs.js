import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Blogsdata } from '../data';

const Blogs = () => {
    const {title}= useParams();
    const [blogData, setBlogData] = useState("");

    useEffect(() => {
        const bodyData= Blogsdata.filter((data)=> data.title === title)
        setBlogData(bodyData[0].body)
    }, [])
    
    return (
        <div>
            <h1>{title} page</h1>
            <p>{blogData.slice(0, 500)}</p>
        </div>
    );
};

export default Blogs;