import React, { FC, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

export interface IResizeWidthProps {
  onStartResizing: (clientX) => void;
  onStopResizing: () => void;
  onToggleExpand: (isExpand: boolean) => void;
}

const ResizeWidth: FC<IResizeWidthProps> = ({
  onStartResizing,
  onStopResizing,
  onToggleExpand
}) => {
  const handleStartResizing = (e) => {
    onStartResizing(e.clientX);
  };

  const handleStopResizing = () => {
    onStopResizing();
  };

  const [isExpand, setIsExpand] = useState(true);
  const handleToggleExpand = () => {
    const next = !isExpand;
    onToggleExpand(next);
    setIsExpand(next);
  };

  return (
    <div
      className={s.dragLine}
      onMouseDown={handleStartResizing}
      onMouseUp={handleStopResizing}
    >
      <div className={cn(s.toggleBtn, !isExpand && s.toggleBtnNotExpand)} onClick={handleToggleExpand} />
    </div>
  );
};
export default ResizeWidth;
