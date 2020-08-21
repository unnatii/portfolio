import React from 'react';
import image from '../../images/dp.png'
import './sidenav.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const SideNav = (props) => {
    return (
        <div className="sidenav">
            <img
                src={image} className="avatar" alt="avatar"
            />
            <h2 className="main-name">Unnatii Tibrewal</h2>
            <p className="subtitle">unnatitibrewal@gmail.com</p>
            <div className="sections-list">
            <p className="section-list-element" >
                <a href="https://www.github.com/unnatii"> <FaGithub/></a>
                </p>
         
            <p className="section-list-element" > 
             <a href="https://www.linkedin.com/in/unnatiitibrewal/"> 
             <FaLinkedin/></a>
             </p>
            </div>
        </div>
    );
};

export default SideNav;