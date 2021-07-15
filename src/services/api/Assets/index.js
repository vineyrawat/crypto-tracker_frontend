import axios from "axios";
const instance = axios.create({ baseURL: "https://crypto-tracker-vinay.herokuapp.com/" });

class AssetRequest {
  getAll = async () => {
    try {
      const data = await instance.get("/assets");
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  };
  get = async (id) => {
    try {
      const data = await instance.get("/assets/" + id);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  };
  getWatchlist = async (watchlist) => {
    try {
      const data = await instance.post("/assets/", { watchlist });
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  };
}

export default AssetRequest;
