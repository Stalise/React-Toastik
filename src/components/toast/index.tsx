import { FC } from 'react';

import { ToastDataType } from 'types/toast';

interface IProps {
  data: ToastDataType;
}

export const Toast: FC<IProps> = ({ data }) => <div>{data.id}</div>;
