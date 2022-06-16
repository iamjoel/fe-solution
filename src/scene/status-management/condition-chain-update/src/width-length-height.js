import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [defaultValue, setDefaultValue] = useState({
    length: 6,
    width: 5,
    height: 7,
  });

  const isRelatedWidthChange = useRef(false);
  const isRelatedHeightChange = useRef(false);

  const [height, setHeight] = useState(defaultValue.height);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const [width, setWidth] = useState(defaultValue.width);
  const handleWidthChange = (e) => setWidth(e.target.value);
  useEffect(() => {
    if (isRelatedHeightChange.current) {
      setHeight(width / 2);
    }
    isRelatedHeightChange.current = true
  }, [width]);

  const [length, setLength] = useState(defaultValue.length);
  const handleLengthChange = (e) => setLength(e.target.value);
  useEffect(() => {
    if (isRelatedWidthChange.current) {
      setWidth(length / 2);
    }
    isRelatedWidthChange.current = true
  }, [length]);

  const revertToDefault = (e) => {
    e.preventDefault();
    isRelatedWidthChange.current = false;
    isRelatedHeightChange.current = false;
    setLength(defaultValue.length);
    setWidth(defaultValue.width);
    setHeight(defaultValue.height);
  };

  const saveToDefault = (e) => {
    e.preventDefault();
    setDefaultValue({
      length,
      width,
      height,
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
        <label className="item">
          <span>高：</span>
          <input value={height} onChange={handleHeightChange} />
        </label>
        <button onClick={revertToDefault} className="btn">还原为默认值</button>
        <button onClick={saveToDefault} className="btn">设置为默认值</button>
      </form>
      <div>
        默认值：长 {defaultValue.length}, 宽 {defaultValue.width}， 高 {defaultValue.height}
      </div>
    </div>
  );
}
