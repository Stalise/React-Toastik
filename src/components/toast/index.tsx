import { FC } from 'react';

import { ToastService } from 'services/toast-service';
import { ToastDataType } from 'types/toast';

interface IProps {
  data: ToastDataType;
}

export const Toast: FC<IProps> = ({ data }) => {
  const handleRemoveToast = () => {
    if (data.id) {
      ToastService.removeToast(data.id);
    }
  };

  return (
    <div>
      {data.id}
      <button onClick={handleRemoveToast}>Delete</button>
    </div>
  );
};
