import {apiConfig} from 'configs';
import axios from 'axios';
import {LS} from "utils";
import {appConfig} from 'configs';

const axiosInstance = axios.create({
    baseURL: apiConfig.url,
    timeout: 9000
  });

  axiosInstance.interceptors.request.use(function (req) {
    const userData = JSON.parse( LS.getItemLocalStorage(appConfig.userData) || "{}");
    req.headers.Authorization = userData?.token;
    return req;
  }, null);

export default axiosInstance;
