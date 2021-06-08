import {useState, useCallback} from 'react';
import { useDebounceFn } from 'ahooks';
import ResizeWidth from './components/resize-width/index.tsx'
import s from './App.module.scss';

const LEFT_MIN = 200;
const LEFT_MAX = 600;
const LEFT_DEFAULT = 300;
function App() {
  const [clientX, setClientX] = useState(0);
  const [isResizing, setIsResizing] = useState(false);

  const storedLeftWidth = localStorage.getItem('app-left-menu-width');
  const calculatedLeftWidth = storedLeftWidth ? parseInt(storedLeftWidth, 10) : LEFT_DEFAULT;
  const [leftWidth, setLeftWidth] = useState(calculatedLeftWidth);
  const [expandLeftWidth, setExpandLeftWidth] = useState(calculatedLeftWidth);
  const [prevUserSelectStyle, setPrevUserSelectStyle] = useState(getComputedStyle(document.body).userSelect);
  const handleStartResizing = useCallback((clientX) => {
    setClientX(clientX);
    setIsResizing(true);
    setPrevUserSelectStyle(getComputedStyle(document.body).userSelect);
    document.body.style.userSelect = 'none';
  }, []);

  const handleStopResizing = useCallback(() => {
    setIsResizing(false);
    document.body.style.userSelect = prevUserSelectStyle;
  }, [prevUserSelectStyle]);

  const { run: didHandleResizing } = useDebounceFn((e) => {
    if(!isResizing) {
      return;
    }
    // console.log('resizing')
    const offset = e.clientX - clientX;
    setClientX(e.clientX);
    let res = leftWidth + offset;
    if (res < LEFT_MIN) {
      res = LEFT_MIN;
    }
    if (res > LEFT_MAX) {
      res = LEFT_MAX;
    }
    setLeftWidth(res);
    setExpandLeftWidth(res);
    localStorage.setItem('app-left-menu-width', `${res}`);
  }, {
    wait: 0,
  });

  const handleResizing = useCallback(didHandleResizing, [leftWidth, isResizing, clientX]);

  const handleToggleExpand = useCallback((isExpend) => {
    setLeftWidth(isExpend ? expandLeftWidth : 0);
  }, [expandLeftWidth]);

  return (
    <div
      className={s.app}
      onMouseMove={handleResizing}
      onMouseUp={handleStopResizing}
    >
      <div
        className={s.left}
        style={{ width: `${leftWidth}px` }}
      >
        左侧部分
        <ResizeWidth
          onStartResizing={handleStartResizing}
          onStopResizing={handleStopResizing}
          onToggleExpand={handleToggleExpand}
        />
      </div>
      <div className={s.right}>
        右侧部分
      </div>
    </div>
  );
}

export default App;
