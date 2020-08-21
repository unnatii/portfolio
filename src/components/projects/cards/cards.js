import React from 'react'
import image from '../../../image.png'
import './cards.css';

const Cards = ({ project }) => {
    return (
      <ul class="cards">
  <li class="cards__item">
    <div class="card">
        <img src={image} alt="" />
     
      <div class="card__content">
        <div class="card__title">Flex</div>
        <p class="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
       
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
   
      <div class="card__content">
        <div class="card__title">Flex Grow</div>
        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
       
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
    
      <div class="card__content">
        <div class="card__title">Flex Shrink</div>
        <p class="card__text">This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.</p>
    
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
     
      <div class="card__content">
        <div class="card__title">Flex Basis</div>
        <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
      
      </div>
    </div>
  </li>
</ul>
    )
}

export default Cards;