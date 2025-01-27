import React from "react";

const CardTitle = ({ image, title, text, button }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">
          <button type="button" class="btn btn-primary">
            {button}
          </button>
        </small>
      </div>
    </div>
  );
};

export default CardTitle;
