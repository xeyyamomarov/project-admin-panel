import axiosInstance from "./index";

export const getAll = ({ count, page }) => {
  return axiosInstance.get('products', { params: { count, page } })
    .then(res => res.data)
    .then(data => data.success);
}