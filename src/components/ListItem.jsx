import React from "react";

const ListItem = ({ value, icon }) => {
  return (
    <li className="flex gap-200">
      <img src={icon} alt={value} />
      <p>{value}</p>
    </li>
  );
};

export default ListItem;
