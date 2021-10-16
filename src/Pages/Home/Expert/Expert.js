import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const{name, img, expertize} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 expert-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expert;