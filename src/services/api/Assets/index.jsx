import axios from "axios";
axios = axios.create({ baseURL: "localhost:5500" });

class AssetRequest {
  assets = () => {
    axios.get("/assets");
  };
}

export default AssetRequest;
