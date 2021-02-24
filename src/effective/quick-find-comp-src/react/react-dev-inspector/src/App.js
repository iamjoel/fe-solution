import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inspector } from 'react-dev-inspector'

const InspectorWrapper = process.env.NODE_ENV === 'development'
  ? Inspector
  : React.Fragment

console.log(process.env.NODE_ENV)

function App() {
  return (
    <InspectorWrapper
      // props docs see:
      // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
      keys={['control', 'b']}
      disableLaunchEditor={false}
      onHoverElement={(params) => {}}
      onClickElement={(params) => {}}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            按 ctrl + b 来开启, 点击调整到源码。
          </p>
        </header>
      </div>
    </InspectorWrapper>
  );
}

export default App;
