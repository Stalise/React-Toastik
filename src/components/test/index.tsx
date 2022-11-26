import { FC } from 'react';

import { getSum } from '../../utils/get-sum';

import styles from './styles.module.scss';

export const Test: FC = () => {
  return (
    <div>
      <p>{getSum()}</p>
      <p className={styles.title}>Hi man!!!</p>
      <div className={styles.block}></div>
    </div >
  );
};
