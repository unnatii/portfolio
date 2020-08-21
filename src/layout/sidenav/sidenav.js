import React from 'react';
import image from '../../image.png'
import './sidenav.css';

const SideNav = (props) => {
    return (
        <div className="sidenav">
            <img
                src={image} className="avatar" alt="avatar"
            />
            <h2 className="main-name">Unnatii Tibrewal</h2>
            <p className="subtitle">"lnmiitian"</p>
            <div className="sections-list">
               
            </div>
        </div>
    );
};

export default SideNav;