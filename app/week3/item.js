import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-2 my-2 flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </li>
  );
};

export default Item;
