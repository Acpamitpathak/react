// src/react-resizable.d.ts
declare module 'react-resizable' {
    import * as React from 'react';
  
    export class ResizableBox extends React.Component<{
      width: number;
      height?: number;
      minConstraints?: [number, number];
      maxConstraints?: [number, number];
      axis?: 'x' | 'y' | 'both';
      resizeHandles?: Array<'n' | 'e' | 's' | 'w' | 'ne' | 'se' | 'sw' | 'nw'>;
      onResize?: (e: React.SyntheticEvent, data: { size: { width: number; height: number } }) => void;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }> {}
  }
  