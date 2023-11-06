import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import "./Counter.css";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="count-display">
        <p>Count: {count}</p>
      </div>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
