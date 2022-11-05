import React from 'react';
import "./Card.css";

type CardProps = {
    children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className='card'>
        { props.children }
    </div>
  )
}

export default Card;