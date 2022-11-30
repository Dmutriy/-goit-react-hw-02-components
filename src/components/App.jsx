import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const currentBtn = e.target.textContent;

    // if (currentBtn === 'Good') {
    // return this.setState(prevState => ({
    //   good: prevState.good + 1,
    // }));
    // }

    switch (currentBtn) {
      case 'Good':
        return this.setState(prevState => ({
          good: prevState.good + 1,
        }));
      case 'Neutral':
        return this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
      case 'Bad':
        return this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
      default:
        alert('Нет таких значений');
    }
    console.log(e.target.textContent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good / total) * 100);

    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <div className="">
            <button type="button" onClick={this.handleIncrement}>
              Good
            </button>
            <button type="button" onClick={this.handleIncrement}>
              Neutral
            </button>
            <button type="button" onClick={this.handleIncrement}>
              Bad
            </button>
          </div>
          <h2>Statistics</h2>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span> Positive feedback: {positiveFeedback}</span>
          {/* <span>Good:{this.state.good}</span>
          <span>Neutral:{this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span> */}
        </div>
      </>
    );
  }
}

//85/500 * 100 = 17%
export default App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template is done
//     </div>
//   );
// };
