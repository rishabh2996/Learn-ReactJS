import React from 'react'
import { Link } from "react-router-dom";
import './home.css'

function Home() {
    return (
        <div className="home">
            <Link to="/get_request"><button>Get Request</button></Link>
            <Link to="/post_request"><button>Post Request</button></Link>
        </div>
    );
}

export default Home