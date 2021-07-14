import React from "react";
import Assets from "../../../components/dashboard/browse/Assets";

function Browse({ assets, error, watchlist }) {
  return (
    <div className="max-w-7xl p-5 mx-auto">
      <h1 className="text-4xl font-heading font-medium mb-5">Browse</h1>
      <Assets assets={assets} error={error} watchlist={watchlist} />
    </div>
  );
}

export default Browse;
