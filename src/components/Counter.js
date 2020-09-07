import React from "react";

const Counter = ({ onINCRESE, onDECRESE, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onINCRESE}>+1</button>
        <button onClick={onDECRESE}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
