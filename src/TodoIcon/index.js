import React from "react";
import "./TodoIcon.css";

import { FaCheck as CheckSVG } from 'react-icons/fa';
import { FaTrash as DeleteSVG } from 'react-icons/fa';

const iconTypes = {
    "check": color => (
      <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }