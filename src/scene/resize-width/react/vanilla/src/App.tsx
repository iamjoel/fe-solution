import {useState, useCallback} from 'react'
import ResizeWidth from './components/resize-width/index.tsx'
import s from './App.module.scss'

const MENU_MIN = 200
const MENU_MAX = 600
const MENU_DEFAULT = 300
function App() {
  const storedMenuWidth = localStorage.getItem('app-left-menu-width')
  const calculatedMenuWidth = storedMenuWidth ? parseInt(storedMenuWidth, 10) : MENU_DEFAULT
  const [menuWidth, setMenuWidth] = useState(calculatedMenuWidth)
  const [expandLeftWidth, setExpandLeftWidth] = useState(calculatedMenuWidth)
 
  const handleResize = useCallback(offset => {
    let res = menuWidth + offset
    if (res < MENU_MIN) {
      res = MENU_MIN
    }
    if (res > MENU_MAX) {
      res = MENU_MAX
    }
    setMenuWidth(res)
    setExpandLeftWidth(res)
    localStorage.setItem('app-left-menu-width', `${res}`)
  }, [menuWidth])

  const handleToggleExpand = useCallback((isExpend) => {
    setMenuWidth(isExpend ? expandLeftWidth : 0)
  }, [expandLeftWidth])

  return (
    <div
      className={s.app}
    >
      <div
        className={s.menu}
        style={{ width: `${menuWidth}px` }}
      >
        <ResizeWidth
          onResize={handleResize}
          onToggleExpand={handleToggleExpand}
        />
      </div>
      <div className={s.main}>
      </div>
    </div>
  )
}

export default App
