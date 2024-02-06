import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <li>
        <span className="font-bold">Name:</span> {name}
      </li>
      <li>
        <span className="font-bold">Quantity:</span> {quantity}
      </li>
      <li>
        <span className="font-bold">Category:</span> {category}
      </li>
    </ul>
  );
}
