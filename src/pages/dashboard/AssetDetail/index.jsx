import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../../../components/dashboard/assetDetail/Details";
import Button from "../../../components/global/Button";
import AssetRequest from "../../../services/api/Assets";

function AssetDetail(props) {
  const [assetData, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const asset = new AssetRequest();

  console.log(assetData);

  useEffect(async () => {
    const [data, error] = await asset.get(id);
    if (error) return setError(error.message);
    setData(data.data.response.data);
  }, []);

  return (
    <div className="max-w-7xl p-5 mx-auto">
      {!error ? (
        <Details data={assetData} />
      ) : (
        <div className="min-h-[400px] flex items-center justify-center flex-col">
          <h2 className="text-2xl mb-3">Unable to fetch data</h2>
          <h2 className="text-2xl font-light opacity-50 mb-6 text-center">
            {error}
          </h2>
          <Button onClick={() => window.location.reload(false)}>Retry</Button>
        </div>
      )}
    </div>
  );
}

export default AssetDetail;
