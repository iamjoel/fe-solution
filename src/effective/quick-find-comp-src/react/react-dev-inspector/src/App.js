import React from 'react';
import { Inspector } from 'react-dev-inspector'
import CompA from './components/comp-a'
import CompB from './components/comp-b'
import './App.css';


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
          <p>
            按 ctrl + b 来开启点击组件查看对应的源码功能。 <br />
            点击 Comp A 或 Comp B 来体验吧~
          </p>

          <CompA />
          <CompB />
        </header>
      </div>
    </InspectorWrapper>
  );
}

export default App;
