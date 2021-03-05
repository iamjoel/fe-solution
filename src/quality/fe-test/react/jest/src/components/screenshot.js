// counter.js
import React from "react";

class Counter extends React.Component {
  state = { count: 0 };
  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="title"><span>ScreenShot Demo</span></h1>
        <button onClick={this.decrement} className="minus-btn">-</button>
        <p className="value">{count}</p>
        <button onClick={this.increment} className="add-btn">+</button>
        <input className="input" type="text" value={count} onChange={
          e => {
            this.setState({
              count: e.target.value
            })
          }
        }></input>
      </div>
    );
  }
}

export default Counter