import React from "react";
import AssetTablePlaceholder from "./AssetTablePlaceholder";
import TableItem from "./TableItem";
import { Link, useHistory } from "react-router-dom";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import StarButton from "./StarButton";

function AssetTable({ assets }) {
  const { location } = useHistory();
  return (
    <table className="table bg-white dark:bg-gray-800 w-full">
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
              <th key={index} className={`text-primary p-2 px-3 ${align()}`}>
                {i}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {assets ? (
          assets.map((i) => (
            <tr key={i.id}>
              <TableItem center>{i.rank}</TableItem>
              <TableItem left>
                <Link to={`${location.pathname}/${i.id}`}>
                  <div className="flex items-center">
                    <div
                      className="h-10 w-10 mr-3 dark:bg-gray-100 dark:rounded-md"
                      style={{
                        backgroundImage: `url(
                          https://cryptologos.cc/logos/${
                            i.id
                          }-${i.symbol.toLowerCase()}-logo.svg?v=012)`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <span className="font-medium hover:underline">
                      {i.name}
                    </span>
                    <span className="ml-2 text-sm text-gray-400">
                      {i.symbol}
                    </span>
                  </div>
                </Link>
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
                <StarButton symbol={i.symbol} />
              </TableItem>
            </tr>
          ))
        ) : (
          <AssetTablePlaceholder />
        )}
      </tbody>
    </table>
  );
}

export default AssetTable;
