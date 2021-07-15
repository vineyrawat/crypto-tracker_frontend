import React, { useState } from "react";
import AssetTablePlaceholder from "./AssetTablePlaceholder";
import TableItem from "./TableItem";
import AssetItem from "./assetTable/AssetItem";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import StarButton from "./StarButton";
import AssetDetailsPopup from "../../AssetDetailsPopup";

function AssetTable({ assets, watchlist }) {
  const [detail, setDetail] = useState(null);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 min-w-max">
        {assets ? (
          <table className="table w-full">
            <thead>
              <tr>
                {[
                  "#",
                  "Name",
                  "Price",
                  "24h%",
                  "Market Cap",
                  "Volume(24h)",
                  "Actions",
                ].map((i, index) => {
                  const align = () => {
                    if (index === 0) return "text-center";
                    if (index === 1) return "text-left";
                    if (index === 6) return "text-center";
                    return "text-right";
                  };
                  return (
                    <th
                      key={index}
                      className={`text-primary p-2 px-3 ${align()}`}
                    >
                      {i}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {assets.map((i) => (
                <tr key={i.id}>
                  <TableItem center>{i.rank}</TableItem>
                  <TableItem left>
                    <AssetItem i={i} onClick={() => setDetail(i.id)} />
                  </TableItem>
                  <TableItem>${Number(i.priceUsd).toFixed(2)}</TableItem>
                  <TableItem>
                    {Number(i.changePercent24Hr) < 0 ? (
                      <span className="text-red-500 flex justify-end items-center">
                        <BiCaretDown />
                        <span className="ml-2">
                          {Number(i.changePercent24Hr).toFixed(2)}%
                        </span>
                      </span>
                    ) : (
                      <span className="text-green-500 flex justify-end items-center">
                        <BiCaretUp />
                        <span className="ml-2">
                          {Number(i.changePercent24Hr).toFixed(2)}%
                        </span>
                      </span>
                    )}
                  </TableItem>
                  <TableItem>${Number(i.marketCapUsd).toFixed(2)}</TableItem>
                  <TableItem>${Number(i.volumeUsd24Hr).toFixed(2)}</TableItem>
                  <TableItem>
                    <StarButton
                      symbol={i.symbol}
                      watchlist={watchlist && watchlist}
                    />
                  </TableItem>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <AssetTablePlaceholder />
        )}
      </div>
      <AssetDetailsPopup
        detail={detail}
        setDetail={setDetail}
        watchlist={watchlist}
      />
    </>
  );
}

export default AssetTable;
