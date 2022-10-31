import React, {useState} from 'react';
import { Blogsdata } from '../data';
import { Link } from 'react-router-dom';
import './Blog.module.css'

const Blog = () => {
    const [blog, setBlog]=useState(Blogsdata)
    const truncatestring = (str, num) => {
        if(str.length>num) {
            return str.slice(0, num) + "..."
        }
        else{
            return str;
        }
    }
    return (
        <div>
            <section>
                {blog.map((blog)=>{
                    const{id, title, body} = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{truncatestring(body, 100)}</p>
                        <Link to={title}>Learn more</Link>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Blog;