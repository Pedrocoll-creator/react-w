

  import React from "react";

  const Card = ({ card }) => {
    return (
      <div className="card m-5">
        <img className="card-img-top" src={card.image} alt={card.title} />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  
   








