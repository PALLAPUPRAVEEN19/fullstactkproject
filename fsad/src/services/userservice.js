import api from "./api";

export const userService = {

  register: async (data) => {
    const res = await api.post("/users/register", data);
    return res.data;
  },

  login: async (email, password) => {
    const res = await api.post("/users/login", { email, password });
    return res.data;
  },

  getAll: async () => {
    const res = await api.get("/users/all");
    return res.data;
  }

};