import axios from "axios";

const instance = axios.create({
  baseURL: "https://crypto-tracker-vinay.herokuapp.com/auth",
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

const watchlist = {
  add(item) {
    return instance.post("/watchlist/add", {
      token: localStorage.getItem("token"),
      item: item,
    });
  },
  remove(item) {
    return instance.post("/watchlist/remove", {
      token: localStorage.getItem("token"),
      item: item,
    });
  },
};

export { login, register, getWatchlist, watchlist };
