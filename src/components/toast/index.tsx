import { FC } from 'react';

import { ToastService } from 'services/toast-service';
import { backgroundColors } from 'data/default-toast-configuration';
import { svgIcons } from 'data/svg-icons';
import type { ToastDataType } from 'types/toast';

import styles from './index.module.scss';

interface IProps {
  data: ToastDataType;
}

export const Toast: FC<IProps> = ({ data }) => {
  const handleRemove = () => {
    if (data.id) {
      ToastService.removeToast(data.id);
    }
  };

  return (
    <div
      style={{ backgroundColor: backgroundColors[data.type] }}
      className={styles.wrapper}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={svgIcons[data.type]} alt='icon' />
      </div>
      <p className={styles.text}>Text</p>
      <div className={styles.closeContainer} onClick={handleRemove}>
        <img className={styles.close} src={svgIcons.cross} alt='icon' />
      </div>
    </div>
  );
};
