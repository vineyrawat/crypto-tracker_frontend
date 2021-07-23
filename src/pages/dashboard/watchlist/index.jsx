import React, { useEffect, useState } from "react";
import Asset from "../../../services/api/Assets";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Button from "../../../components/global/Button/ButtonOutline";
import StarButton from "../../../components/dashboard/browse/Assets/StarButton";
import AssetDetailsPopup from "../../../components/dashboard/AssetDetailsPopup";

const AssetItem = ({ data, watchlist, setDetail }) => {
  return (
    <div className="flex flex-col h-60 rounded-md border dark:border-gray-700 p-5 bg-white dark:bg-gray-800 relative overflow-hidden">
      <img
        src={`https://cryptologos.cc/logos/${
          data.id
        }-${data.symbol.toLowerCase()}-logo.svg?v=012`}
        className="h-16 w-16 bg-gray-50 border dark:border-none rounded-full p-2 absolute right-5"
      />
      <h1 className="uppercase truncate font-medium text-gray-700 dark:text-gray-200">
        {data.name}
      </h1>
      <h1 className="uppercase truncate font-normal text-sm text-gray-600 dark:text-gray-400">
        {data.symbol}
      </h1>
      <h1 className="font-bold text-4xl my-2">
        ${Number(data.priceUsd).toFixed(2)}
      </h1>
      <h1 className="font-bold">
        {data.changePercent24Hr > 0 ? (
          <div className="flex items-center text-green-500">
            <BsCaretUpFill className="mr-1" />
            <h1>{Number(data.changePercent24Hr).toFixed(2)}%</h1>
          </div>
        ) : (
          <div className="flex items-center text-red-500">
            <BsCaretDownFill className="mr-1" />
            <h1>{Number(data.changePercent24Hr).toFixed(2)}%</h1>
          </div>
        )}
      </h1>
      <div className="flex justify-between mt-auto">
        <Button variant="gray" onClick={() => setDetail(data.id)}>
          Details
        </Button>
        <StarButton
          isFullWidth={false}
          symbol={data.symbol}
          watchlist={watchlist}
          size="md"
        />
      </div>
    </div>
  );
};

function Watchlist({ watchlist }) {
  const [watchAssets, setWatchAssets] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(async () => {
    if (!watchlist) return;
    if (watchlist.length === 0) return;
    const asset = new Asset();
    const [data, error] = await asset.getWatchlist(watchlist);
    error ? console.log(error) : setWatchAssets(data.data.response);
  }, [watchlist]);

  return (
    <>
      <div className="max-w-7xl p-5 mx-auto">
        <h1 className="text-4xl font-heading font-medium mb-10">Watchlist</h1>
        {watchlist ? (
          <div>
            {watchlist.length > 0 ? (
              <div>
                {watchAssets ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {watchAssets.map((i) => (
                      <AssetItem
                        key={i.rank}
                        watchlist={watchlist}
                        data={i}
                        setDetail={setDetail}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {watchlist.map((i) => {
                      return (
                        <div className="h-60 bg-gray-100 dark:bg-gray-800 dark:border-0 animate-pulse border rounded-lg" />
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center h-60">
                <h1 className="text-2xl">Your watchlist is empty!</h1>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center h-60">
            <div className="w-10 h-10 border-2 border-primary rounded-full animate-spin border-b-[transparent]"></div>
          </div>
        )}
      </div>
      <AssetDetailsPopup
        watchlist={watchlist}
        detail={detail}
        setDetail={setDetail}
      />
    </>
  );
}

export default Watchlist;
