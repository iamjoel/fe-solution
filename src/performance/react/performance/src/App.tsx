import React, {useState, useCallback} from 'react';
import CacheFnComp from './components/cache-sub-comp/fn-comp';
import CacheClassComp from './components/cache-sub-comp/class-comp';
import BatchUpdateFnComp from './components/batch-update/fn-comp';
import BatchUpdateClassComp from './components/batch-update/class-comp';
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
      <section>
        <h2>避免子组件不必要的渲染</h2>
        <button onClick={toggleName}>Toggle Name</button>
        <button onClick={toggleOther}>Toggle other({other})</button>
        <CacheFnComp name={name} />
        <CacheClassComp name={name} />
      </section>
      <section>
        <h2>批量更新: 减少 Render 次数</h2>
        FnComp: <BatchUpdateFnComp />
        ClassComp: <BatchUpdateClassComp />
      </section>
    </div>
  );
}

export default App;
