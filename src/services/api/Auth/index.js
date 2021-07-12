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

export { login };
