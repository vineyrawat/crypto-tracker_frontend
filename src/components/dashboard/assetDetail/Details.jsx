import React from "react";
import AssetDetailsPlaceholder from "../../../components/dashboard/assetDetail/AssetDetailsPlaceholder";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import StarButton from "../browse/Assets/StarButton";

function Details({ data }) {
  return (
    <div>
      {data ? (
        <div className="flex mt-3 flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                src={`https://cryptologos.cc/logos/${
                  data.id
                }-${data.symbol.toLowerCase()}-logo.svg?v=012`}
                className="w-12 h-12 mr-3 dark:bg-gray-100 p-1 rounded-md"
              />
              <h1 className="text-4xl font-heading font-semibold">
                {data.name}
              </h1>
              <h2 className="text-2xl opacity-50 ml-2 mt-1">{data.symbol}</h2>
              <span className="mt-1 ml-2">
                <StarButton symbol={data.symbol} />
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-4xl font-heading font-semibold ">
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
          </div>
          <div className="bg-white dark:bg-gray-800 min-h-[300px] mt-6 shadow-sm rounded-md"></div>
        </div>
      ) : (
        <AssetDetailsPlaceholder />
      )}
    </div>
  );
}

export default Details;
