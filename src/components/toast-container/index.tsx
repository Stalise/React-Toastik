import { FC } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import { TOAST_CONTAINER_ID } from 'data/constants';
import type { PositionType } from 'types/toast';

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
    <div
      className={cn(styles.wrapper, styles[position])}
      id={TOAST_CONTAINER_ID}>
      Container
    </div>,
    container
  );
