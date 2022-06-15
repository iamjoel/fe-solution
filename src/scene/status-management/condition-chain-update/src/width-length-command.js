import React, { useState } from 'react';

export default function App() {
  const [defaultValue, setDefaultValue] = useState({
    length: 6,
    width: 5,
  });

  const [width, setWidth] = useState(defaultValue.width);
  const handleWidthChange = (e) => setWidth(e.target.value);

  const [length, setLength] = useState(defaultValue.length);
  const handleLengthChange = (e) => {
    const val = e.target.value
    setLength(val);
    setWidth(val / 2);
  };

  const revertToDefault = (e) => {
    e.preventDefault();
    setLength(defaultValue.length);
    setWidth(defaultValue.width);
  };

  const saveToDefault = (e) => {
    e.preventDefault();
    setDefaultValue({
      length,
      width,
    });
  };

  return (
    <div>
      <form>
        <label className="item">
          <span>长：</span>
          <input value={length} onChange={handleLengthChange} />
        </label>
        <label className="item">
          <span>宽：</span>
          <input value={width} onChange={handleWidthChange} />
        </label>
        <button onClick={revertToDefault}>还原为默认值</button>
        <button onClick={saveToDefault}>设置为默认值</button>
      </form>
      <div>
        默认值：长 {defaultValue.length}, 宽 {defaultValue.width}
      </div>
    </div>
  );
}
