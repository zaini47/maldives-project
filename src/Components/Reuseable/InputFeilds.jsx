import React from 'react';

function InputFields(props) {
  return (
    <>
      <div className='py-3'>
        <label htmlFor="email" className={`fnt-set5 ${props.labelclass}`}>
          {props.name}
        </label><br />
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={props.inputStyle}
          required
        />
      </div>
    </>
  );
}

export default InputFields;
