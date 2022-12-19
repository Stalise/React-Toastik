import type { ToastDataType } from '../types/toast';
import { addToastHelper } from '../utils/add-toast-helper';

class Service {
  static _instance: Service;
  private toasts: ToastDataType[] = [];

  constructor() {
    if (Service._instance) {
      return Service._instance;
    }

    Service._instance = this;
  }

  addToast(data: ToastDataType) {
    addToastHelper(data, this.toasts);
  }
}

export const ToastService = new Service();
