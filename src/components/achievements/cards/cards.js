import React from 'react'
import image from '../../../image.png'
import './cards.css';

const Cards = ({ project }) => {
    return (
      <div className="card">
      <div className="row">
        <div className="avatar-container">
          <div className="photo">
            <img className="img" src={image} />
          </div>
        </div>
        <div className="details-container">
          <div className="content">
            <h3>Joe Doe</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Cards;