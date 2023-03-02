import React from 'react';
import './card.css';
const Card = (props) => {

    const cssname='card '+props.className;


    
    // console.log(cssname)
    return (
        <div className={cssname}>
            {props.children}
        </div>
    );
}

export default Card;
