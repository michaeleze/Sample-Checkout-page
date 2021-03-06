import React from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './index.css';

interface InputWithCounter {
  sku: string;
  handleChange(event: any): void;
  handleIncrease(sku: string): void;
  handleReduce(sku: string): void;
  value: number;
}

export const InputWithCounter = (props: InputWithCounter) => {
  const {
    sku,
    value,
    handleChange,
    handleIncrease,
    handleReduce,
  } = props;

  return (
    <div className="counter__container">
      <RemoveIcon onClick={() => handleReduce(sku)} className="counter__remove"/>
      <input
        className="counter__input"
        name={sku}
        min="0"
        onChange={handleChange}
        role='input'
        type="number"
        value={value}
      />
      <AddIcon onClick={() => handleIncrease(sku)} className="counter__add"/>
    </div>
  )
}
