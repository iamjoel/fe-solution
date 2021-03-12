import React, {useEffect} from 'react';

interface IProps {
  name: string;
}
function FnComp({name}: IProps) {
  useEffect(() => console.log('Pure Fn Component mount'), [])
  console.log('render Pure Fn Component')
  return (<div>Pure Fn Component: {name}</div>)
}

// export default FnComp
export default React.memo(FnComp)