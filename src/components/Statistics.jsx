import React, { Component } from 'react';
// import './TodoList.css';

// class Statistics extends Component {
//   render() {
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2>Statistics</h2>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span> Positive feedback: {positiveFeedback}</span>
    </>
  );
};
// }

export default Statistics;
