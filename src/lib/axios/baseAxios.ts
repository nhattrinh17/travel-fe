import { messageResponse } from '@/constants';
import { addFlashMessageFailed } from '@/uiCore/FlashMessage/HandleFlashMessage';
import axios, { AxiosInstance } from 'axios';

export class BaseAxios {
  private request: AxiosInstance;

  constructor(urlBase?: string) {
    const accessToken = sessionStorage.getItem('access_token');
    this.request = axios.create({
      baseURL: urlBase || process.env.API_URL,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Access-Control-Allow-Origin': '*',
      },
      timeout: 10000,
    });
  }

  async post(url: string, data: any, config?: any) {
    try {
      const response = await this.request.post(url, data, config);
      return response.data;
    } catch (error: any) {
      const typeError: string = error?.response?.data?.exception?.message;
      addFlashMessageFailed(messageResponse[typeError] || 'Có lỗi xảy ra vui lòng thử lại sau');
      return false;
    }
  }

  async get(url: string, config?: any) {
    try {
      const response = await this.request.get(url, config);
      return response.data;
    } catch (error: any) {
      const typeError: string = error?.response?.data?.exception?.message;
      addFlashMessageFailed(messageResponse[typeError] || 'Có lỗi xảy ra vui lòng thử lại sau');

      return false;
    }
  }

  async patch(url: string, data: object, config?: any) {
    try {
      const response = await this.request.patch(url, data, config);
      return response.data;
    } catch (error: any) {
      const typeError: string = error?.response?.data?.exception?.message;
      addFlashMessageFailed(messageResponse[typeError] || 'Có lỗi xảy ra vui lòng thử lại sau');

      return false;
    }
  }

  async delete(url: string, config?: any) {
    try {
      const response = await this.request.delete(url, config);
      return response.data;
    } catch (error: any) {
      const typeError: string = error?.response?.data?.exception?.message;
      addFlashMessageFailed(messageResponse[typeError] || 'Có lỗi xảy ra vui lòng thử lại sau');

      return false;
    }
  }
}
