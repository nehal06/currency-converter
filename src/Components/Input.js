import React, { Fragment } from 'react';

const Input = props => {
  const { inputtype, changeCurrency, value, name } = props;
  console.log(inputtype);
  return (
    <Fragment>
      {inputtype != 'RATE' && (
        <div className="inputParent">
          <label htmlFor={inputtype} className={inputtype}>
            {inputtype}
          </label>
          <input
            id={inputtype}
            type="number"
            onChange={changeCurrency}
            name={name}
            value={value}
            className="inputField"
          />
        </div>
      )}
      {inputtype == 'RATE' && (
        <div className="inputParent rate">
          <label htmlFor={inputtype} className={`rateField ${inputtype}`}>
            {`1 USD equals to`}
          </label>
          <input
            id={inputtype}
            type="number"
            onChange={changeCurrency}
            name={name}
            value={value}
            className="inputField rateField"
            readOnly="readOnly"
          />
          <span htmlFor={inputtype} className="rupeeWord">
            Rupee
          </span>
        </div>
      )}
    </Fragment>
  );
};

export default Input;
