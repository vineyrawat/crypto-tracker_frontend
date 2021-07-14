import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5500/auth",
});

const login = async (email, password) => {
  try {
    const data = await instance.post("/login", { email, password });
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

const register = async (name, email, password) => {
  try {
    const data = await instance.post("/", { name, email, password });
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

const getWatchlist = async (userEmail) => {
  try {
    const data = await instance.get(`/watchlist/${userEmail}`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export { login, register, getWatchlist };
