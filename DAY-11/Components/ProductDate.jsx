import React from 'react';

const ProductDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="bg-black text-blue-800 rounded-xl p-2 text-center w-24">
      <div className="font-bold text-white">{month}</div>
      <div className="font-bold text-white">{day}</div>
      <div className="font-bold text-white">{year}</div>
    </div>
  );
};

export default ProductDate;
