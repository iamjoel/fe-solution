import React, {useState, useCallback} from 'react';
import PureFn from './components/pure-fn';

import './App.css';

function App() {
  const [name, setName] = useState('Joel')
  const toggleName = useCallback(
    () => setName(name === 'Joel' ? 'Jack' : 'Joel')
    ,[name]
  )

  const [other, setOther] = useState('foo')
  const toggleOther = useCallback(
    () => setOther(other === 'foo' ? 'bar' : 'foo')
    ,[other]
  )

  return (
    <div className="App">
      <button onClick={toggleName}>Toggle Name</button>
      <button onClick={toggleOther}>Toggle other</button>
      <PureFn name={name}></PureFn>
    </div>
  );
}

export default App;
