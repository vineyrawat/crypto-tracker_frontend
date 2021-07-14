import React from "react";
import AssetDetailsPlaceholder from "../../../components/dashboard/assetDetail/AssetDetailsPlaceholder";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import PriceChart from "./PriceChart";

function Details({ data, watchlist }) {
  return (
    <div>
      {data ? (
        <div className="flex mt-3 flex-col">
          {/* header */}
          <header className="flex sm:items-center justify-between w-full flex-col sm:flex-row">
            <div className="flex items-center">
              <img
                src={`https://cryptologos.cc/logos/${
                  data.id
                }-${data.symbol.toLowerCase()}-logo.svg?v=012`}
                className="w-10 h-10 mr-3 dark:bg-gray-100 p-1 rounded-md"
              />
              <h1 className="text-2xl font-heading font-semibold truncate">
                {data.name}
              </h1>
              <h2 className="text-xl opacity-50 ml-2">{data.symbol}</h2>
            </div>
            <div className="flex mt-3 items-center">
              <h1 className="text-2xl font-heading font-semibold ">
                ${Number(data.priceUsd).toFixed(2)}
              </h1>
              <span
                className={`${
                  data.changePercent24Hr > 0 ? "bg-green-400" : "bg-red-400"
                } text-white px-3 py-1 ml-2 flex items-center font-bold rounded-full`}
              >
                {data.changePercent24Hr > 0 ? (
                  <BsCaretUpFill />
                ) : (
                  <BsCaretDownFill />
                )}
                {Number(data.changePercent24Hr).toFixed(2)}%
              </span>
            </div>
          </header>
          {/* market details */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
            <div className="flex border flex-col items-start rounded-lg p-2">
              <h2 className="font-medium font-body text-gray-500 text-xl">
                Supply
              </h2>
              <h1 className="font-semibold text-2xl font-heading my-2">
                ${Number(data.supply).toFixed(2)}
              </h1>
            </div>
            <div className="flex border flex-col items-start rounded-lg p-2">
              <h2 className="font-medium font-body text-gray-500 text-xl">
                Market Cap
              </h2>
              <h1 className="font-semibold text-2xl font-heading my-2">
                ${Number(data.marketCapUsd).toFixed(2)}
              </h1>
            </div>
            <div className="flex border flex-col items-start rounded-lg p-2">
              <h2 className="font-medium font-body text-gray-500 text-xl">
                Volume (24h)
              </h2>
              <h1 className="font-semibold text-2xl font-heading my-2">
                ${Number(data.volumeUsd24Hr).toFixed(2)}
              </h1>
            </div>
          </section>
          {/* chart */}
          <PriceChart id={data.id} name={data.name} />
        </div>
      ) : (
        <AssetDetailsPlaceholder />
      )}
    </div>
  );
}

export default Details;
