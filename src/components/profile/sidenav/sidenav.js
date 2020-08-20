import React from 'react';
import image from '../../../image.png'
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
                <p className="section-list-element" onClick={()=>props.changeTab("About")}>About Me</p>
                <p className="section-list-element" onClick={()=>props.changeTab("Skills")}>Skills</p>
                <p className="section-list-element" onClick={()=>props.changeTab("Projects")}>Projects</p>
            </div>
        </div>
    );
};

export default SideNav;