import React, { Component } from 'react';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const currentBtn = e.target.textContent;

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
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          ></Statistics>
        </div>
      </>
    );
  }
}

export default App;
