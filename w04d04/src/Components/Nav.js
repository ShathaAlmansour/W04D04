import React from "react";
import { Link } from "react-router-dom";
// import { IoArrowBackCircleSharp } from "react-icons/IO5";
import { useHistory } from 'react-router';





const Nav = () => { 
    const history = useHistory()
    const goBack = () => {
        history.goBack()

    } 

    return (
        <div className="nav">
            <ul>
            <div className='icon' onClick ={goBack}></div>
                <li> <Link to ="/Home">Home</Link></li>
                <li> <Link to ="/About">About</Link></li>
                <li> <Link to ="/Contact">Contact</Link></li>
                <li> <Link to ="/Cards">Cards</Link></li>
                <li> <Link to ="/Card">Card</Link></li>

            </ul>
        </div>
    )

}

export default Nav;