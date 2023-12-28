import React from 'react';
import '../Reuseable/Reuseable.css';
function Button(props) {
  return (
    <div>
      <button
        className={props.batn}
        type={props.type}
        onClick={props.click}
      >
        {props.iconClass && <i className={`me-3 ${props.iconClass}`}></i>}
        {props.name}
        {props.icons && <i className={props.icons}></i>} </button>
    </div>
  )
}

export default Button;
