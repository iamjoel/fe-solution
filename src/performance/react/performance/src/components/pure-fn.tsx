import React from 'react';

interface IProps {
  name: string;
}
function PureFn({name}: IProps) {
  console.log('render Pure Fn')
  return (<div>PureFn: {name}</div>)
}

export default React.memo(PureFn)