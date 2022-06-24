import { config } from "antd-mobile/es/components/toast/methods";
import axios from "axios";

import KingUrl from "../kingUrl";

const Http = axios.create({
  baseUrl: KingUrl,
  timeout: 8000,
});

/**
 * @param response  请求拦截
 * * */
Http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject("请求出现错误");
  }
);

Http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

const baseRequest = (
  url,
  method = "get",
  data = {},
  params = {},
  header = {},
  once = "false",
  noMsg
) => {
  const request = Http({
    url,
    method,
    data,
    params,
    header: {
      "Content-Type": "application/json",
      "X-Site-Alias": "zjgj",
      ...header,
    },
    once,
    noMsg,
  });
  return request;
};

/**
 * get 请求
 * @param type 请求方式
 * @param urlLink 请求地址
 * @param  param 请求参数
 * @returns {Promise<AxiosResponse>}
 * * */
export const getData = (urlLink, param = {}) => {
  return baseRequest(urlLink, "get", {}, param);
};
