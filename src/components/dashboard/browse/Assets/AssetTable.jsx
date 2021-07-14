import React, { Fragment, useContext, useEffect, useState } from "react";
import AssetTablePlaceholder from "./AssetTablePlaceholder";
import TableItem from "./TableItem";
import AssetItem from "./assetTable/AssetItem";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import StarButton from "./StarButton";
import { Transition, Dialog } from "@headlessui/react";
import AssetDetail from "../../../../pages/dashboard/AssetDetail";

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
      <Transition appear show={detail ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="fixed px-2 inset-0 z-10 overflow-y-auto"
          onClose={() => setDetail(null)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-4xl relative overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl">
                <button
                  type="button"
                  className="inline-flex absolute top-0 right-0 justify-center px-3 py-1 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => setDetail(null)}
                >
                  X
                </button>
                <AssetDetail watchlist={watchlist && watchlist} id={detail} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AssetTable;
