// src/components/ResizablePanel.tsx
import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface ResizablePanelProps {
  width: number;
  minWidth?: number;
  maxWidth?: number;
  onResize?: (e: React.SyntheticEvent, data: { size: { width: number; height: number } }) => void;
  children: React.ReactNode;
}

const ResizablePanel: React.FC<ResizablePanelProps> = ({
  width,
  minWidth = 100,
  maxWidth = 800,
  onResize,
  children
}) => {
  return (
    <ResizableBox
      width={width}
      height={Infinity}
      minConstraints={[minWidth, 0]}
      maxConstraints={[maxWidth, Infinity]}
      axis="x"
      onResize={onResize}
      resizeHandles={['e']}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizablePanel;
