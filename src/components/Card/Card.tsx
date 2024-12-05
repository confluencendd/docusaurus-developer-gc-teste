import React from "react";
import "./Card.css";

const Card = ({ icon, title, description, link }) => {
  return (
    <div className="card">
      <div className="card-icon"><img src={icon} /></div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link" rel="noopener noreferrer">
        Acesse → 
      </a>
    </div>
  );
};

export default Card;
