import React from 'react';
import Sidenav from '../sidenav/sidenav'
import './profile.css'
import MainSection from '../mainSection/mainSection'


const Profile = (props) => {
    return ( <div className="portfolio-container">
        <div className="sidenav-container">
            <Sidenav changeTab={props.handleTab}/>
            </div>
        <div className="main-section-container">
            <MainSection/>
            </div>
    </div> );
}
 
export default Profile;