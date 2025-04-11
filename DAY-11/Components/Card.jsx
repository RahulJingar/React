import React from 'react';

const Card = (props) => {
  return (
    <div className={`bg-yellow-500 shadow-lg rounded-xl p-4 w-[600px] ml-[490px] ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
