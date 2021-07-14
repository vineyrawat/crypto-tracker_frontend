import React, { useEffect, useState } from "react";
import Asset from "../../../services/api/Assets";

function Watchlist({ user, watchlist }) {
  const [watchAssets, setWatchAssets] = useState(null);

  useEffect(async () => {
    if (!watchlist) return;
    if (watchlist.length === 0) return;
    const asset = new Asset();
    const [data, error] = await asset.getWatchlist(watchlist);
    error ? console.log(error) : setWatchAssets(data.data.response);
  }, [watchlist]);

  return (
    <div className="max-w-7xl p-5 mx-auto">
      <h1 className="text-4xl font-heading font-medium mb-5">Watchlist</h1>
      {watchlist ? (
        <div>
          {watchlist.length > 0 ? (
            <div>
              {watchAssets ? (
                <div>
                  {watchAssets.map((i) => (
                    <div key={i.rank}>{i.name}</div>
                  ))}
                </div>
              ) : (
                "Loading asssets..."
              )}
            </div>
          ) : (
            "Your watchlist is empty"
          )}
        </div>
      ) : (
        "Loading watchlist..."
      )}
    </div>
  );
}

export default Watchlist;
