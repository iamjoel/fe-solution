import React from 'react';
import WidthLength from './width-length'
import WidthLengthCommand from './width-length-command'
import WidthLengthHeight from './width-length-height'

export default function App() {
  return (
    <div>
      <h2>命令式写法</h2>
      <WidthLengthCommand />

      <h2>声明式写法</h2>
      <WidthLength />
      <WidthLengthHeight />
    </div>
  );
}
