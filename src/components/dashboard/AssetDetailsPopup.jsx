import { Transition, Dialog } from "@headlessui/react";
import AssetDetail from "../../pages/dashboard/AssetDetail";

import React, { Fragment } from "react";

export default function AssetDetailsPopup({ detail, setDetail, watchlist }) {
  return (
    <>
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
