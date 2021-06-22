import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDebounceFn } from 'ahooks';
import cn from 'classnames';
import s from './style.module.scss';

export interface IResizeWidthProps {
  onResize: (offset: number) => void;
  onToggleExpand: (isExpand: boolean) => void;
}

const ResizeWidth: FC<IResizeWidthProps> = ({
  onToggleExpand,
  onResize
}) => {
  const [clientX, setClientX] = useState(0);
  const [isResizing, setIsResizing] = useState(false);
  const [prevUserSelectStyle, setPrevUserSelectStyle] = useState(getComputedStyle(document.body).userSelect);

  const handleStartResizing = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setClientX(e.clientX)
    setIsResizing(true)
    setPrevUserSelectStyle(getComputedStyle(document.body).userSelect)
    document.body.style.userSelect = 'none'
  }, []);

  const handleStopResizing = useCallback(() => {
    setIsResizing(false)
    document.body.style.userSelect = prevUserSelectStyle;
  }, [prevUserSelectStyle]);

  const { run: didHandleResize } = useDebounceFn((e) => {
    if(!isResizing) {
      return;
    }
    const offset = e.clientX - clientX;
    setClientX(e.clientX);
    onResize(offset)
  }, {
    wait: 0,
  });

  const handleResize = useCallback(didHandleResize, [isResizing, clientX, didHandleResize])

  useEffect(() => {
    document.addEventListener('mouseup', handleStopResizing)
    document.addEventListener('mousemove', handleResize)
    return () => {
      document.removeEventListener('mouseup', handleStopResizing)
      document.removeEventListener('mousemove', handleResize)
    }
  }, [handleStopResizing, handleResize])


  const [isExpand, setIsExpand] = useState(true);
  const handleToggleExpand = () => {
    const next = !isExpand;
    onToggleExpand(next);
    setIsExpand(next);
  };

  return (
    <div
      className={s.wrap}
      onMouseDown={handleStartResizing}
    >
      <div className={cn(s.toggleBtn, !isExpand && s.fold)} onClick={handleToggleExpand} />
      {isResizing && <div className={s.mask} />}
    </div>
  );
};
export default ResizeWidth;
