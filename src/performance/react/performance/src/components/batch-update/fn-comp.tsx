import React, {useState, useCallback} from 'react';

function FnComp() {
  const [boyName, setBoyName] = useState('Joel')
  const [girlName, setGirlName] = useState('Lily')

  const handleChangeMultiState = useCallback(() => {
    // 也是执行了一次。。。
    setBoyName(boyName === 'Joel' ? 'Jack' : 'Joel')
    setGirlName(girlName === 'Lily' ? 'JoJo' : 'Lily')
  }, [boyName, girlName])

  console.log('render batch update state Function Component')
  return (
    <div>
        <button onClick={handleChangeMultiState}>更改名字</button>
        <div>{boyName}, {girlName}</div>
      </div>
  )
}

export default React.memo(FnComp)