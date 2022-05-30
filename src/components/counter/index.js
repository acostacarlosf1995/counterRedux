import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, plus, minus, typeCount } from "../../actions/counter";

import "./index.css";

function Counter() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handlePlus = () => {
    dispatch(plus());
  };

  const handleMinus = () => {
    dispatch(minus());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleInputPlus = () => {
    dispatch(typeCount(parseInt(inputRef.current.value)));
  };

  return (
    <div className="container">
      <h1>Counter: {number}</h1>
      <div className="input_container">
        <button className="btn_minus" onClick={handleMinus}>
          -1
        </button>
        <button className="btn_plus" onClick={handlePlus}>
          +1
        </button>
      </div>
      <div className="input_container">
        <input className="input" type="number" ref={inputRef} />
        <button className="reset" onClick={handleInputPlus}>
          Add input
        </button>
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
