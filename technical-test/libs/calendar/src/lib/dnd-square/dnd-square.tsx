import { Children, JSXElementConstructor, ReactChild } from 'react';
import './dnd-square.module.scss';

/* eslint-disable-next-line */
export interface DndSquareProps {
  children: ReactChild | null;
}

export function DndSquare(props: DndSquareProps) {
  return (
    <div style={{ outlineStyle: 'solid', width: '100%', height: '100%' }}>
      {props.children}
    </div>
  );
}

export default DndSquare;
