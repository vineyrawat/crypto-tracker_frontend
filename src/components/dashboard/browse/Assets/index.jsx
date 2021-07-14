import React from "react";
import AssetTable from "./AssetTable";
import Button from "../../../global/Button";

function Assets({ error, assets, watchlist }) {
  return (
    <div className="overflow-x-auto rounded-md shadow-sm">
      {error ? (
        <div className="min-h-[400px] flex items-center justify-center flex-col">
          <h2 className="text-2xl mb-3">Unable to fetch data</h2>
          <h2 className="text-2xl font-light opacity-50 mb-6 text-center">
            {error}
          </h2>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      ) : (
        <AssetTable assets={assets} watchlist={watchlist} />
      )}
    </div>
  );
}

export default Assets;
