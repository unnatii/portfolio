import React from 'react';
import Card from './cards/cards'
import image1 from '../../images/tedx.png'
import image2 from '../../images/prize.png'
const Achievements = () => {
    return (<div><Card image={image1}/>
    <Card image={image2}/>
    <Card image={image1}/>
    <Card image={image1}/></div> );
}
 
export default Achievements;