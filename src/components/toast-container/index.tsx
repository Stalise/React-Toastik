import { FC } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import type { PositionType } from './types';

import styles from './index.module.scss';

interface IProps {
  position?: PositionType;
  container?: HTMLElement;
}

export const ToastContainer: FC<IProps> = ({
  position = 'top-right',
  container = document.body,
}) =>
  ReactDOM.createPortal(
    <div className={cn(styles.wrapper, styles[position])}>Hello</div>,
    container
  );
