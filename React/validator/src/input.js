import React from 'react';
import {validate} from './validators';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = props => {
   return (
     <div className='form-input' data-testid="form-input">
       <label>{props.label}</label>
       <input type={props.type} id={props.id} />
       <p>{props.errorText}</p>
     </div>
   )
};

export default Input;
