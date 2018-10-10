import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, update } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <span className="inc" onClick={() => update("inc")}>
            +
          </span>
          <span className="disp">{count}</span>
          <span className="dec" onClick={() => update("dec")}>
            -
          </span>
        </div>
      </React.Fragment>
    );
  }
}

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.update = this.update.bind(this);
  }
  update(val) {
    if (val === "inc") {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    } else if (val === "dec") {
      this.setState(prevState => ({
        count: prevState.count === 0 ? prevState.count : prevState.count - 1
      }));
    }
  }
  render() {
    const { render: renderCounter } = this.props;
    return renderCounter({ ...this.props, ...this.state, update: this.update });
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter Component</h2>
      <CounterComponent render={props => <Counter {...props} />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
