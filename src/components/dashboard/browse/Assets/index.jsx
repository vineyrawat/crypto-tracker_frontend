import React, { useEffect, useState } from "react";
import AssetRequest from "../../../../services/api/Assets";
import AssetTable from "./AssetTable";
import Button from "../../../global/Button";

function Assets(props) {
  const [assets, setAssets] = useState(null);
  const [error, setError] = useState(null);

  const asset = new AssetRequest();

  useEffect(async () => {
    const [data, error] = await asset.getAll();
    if (error) return setError(error.message);
    if (data.data.status !== "success") return setError(data.data.error);
    setAssets(data.data.response.data);
  }, []);

  return (
    <div className="overflow-x-auto rounded-md shadow-sm">
      {error ? (
        <div className="min-h-[400px] flex items-center justify-center flex-col">
          <h2 className="text-2xl mb-3">Unable to fetch data</h2>
          <h2 className="text-2xl font-light opacity-50 mb-6 text-center">
            {error}
          </h2>
          <Button onClick={() => window.location.reload(false)}>Retry</Button>
        </div>
      ) : (
        <AssetTable assets={assets} />
      )}
    </div>
  );
}

export default Assets;
