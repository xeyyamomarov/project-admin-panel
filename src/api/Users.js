import axiosInstance from "./index";

export const getAll = ({ count, page }) => {
  return axiosInstance
    .get("users", { params: { count, page } })
    .then((res) => res.data)
    .then((data) => data.success);
};

export const get = ({ id }) => {
  return axiosInstance
    .get(`users/${id}`)
    .then((res) => res.data)
    .then((data) => data.success);
};

export const update = ({ id, user }) => {
  return axiosInstance
    .put(`users/${id}/update`, user)
    .then((res) => res.data)
    .then((data) => data.success);
};
