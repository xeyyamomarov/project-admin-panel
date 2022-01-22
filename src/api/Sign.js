import axiosInstance from './index';

export const signIn = ({username, password}) => {
    return axiosInstance.post("sign/in", {username, password}).then(res => res.data).then(data => data.success);
}