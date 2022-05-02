import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { IRequestParams, IRequestResponse, TBackData } from "../types/global/request";

interface MyAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
  (url: string, config?: AxiosRequestConfig): Promise<any>;
}

export class Request {
  public static axiosInstance: MyAxiosInstance;

  public static init() {
    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL: "/api",
      timeout: 10000,
    });
    // 初始化拦截器
    this.initInterceptors();
  }

  // 初始化拦截器
  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  }

  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   * @param message
   */
  private static errorHandle(res: IRequestResponse, message?: string) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      default:
      // 错误信息判断
    }
  }
}
