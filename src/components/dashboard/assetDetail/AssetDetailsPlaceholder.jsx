import React from "react";

function AssetDetailsPlaceholder(props) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col sm:flex-row">
        <div className="flex">
          <div className="bg-white dark:bg-gray-600 animate-pulse w-14 rounded-full h-14 shadow-sm"></div>
          <div className="bg-white dark:bg-gray-600 animate-pulse w-48 h-14 ml-5 shadow-sm"></div>
        </div>
        <div className="flex sm:ml-auto mt-5 sm:mt-0">
          <div className="bg-white dark:bg-gray-600 animate-pulse w-48 h-14 shadow-sm"></div>
          <div className="bg-white dark:bg-gray-600 animate-pulse w-16 h-14 ml-auto sm:ml-5 shadow-sm"></div>
        </div>
      </div>
      <div className="flex flex-col mt-10 min-h-[400px] p-5 bg-white dark:bg-gray-800 w-full shadow-sm">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          <div className="bg-gray-100 dark:bg-gray-600 h-36 animate-pulse"></div>
          <div className="bg-gray-100 dark:bg-gray-600 h-36 animate-pulse"></div>
          <div className="bg-gray-100 dark:bg-gray-600 h-36 animate-pulse"></div>
        </div>
        <div className="flex flex-col w-full mt-5">
          <div className="bg-gray-100 dark:bg-gray-600 h-10 w-full animate-pulse"></div>
          <div className="bg-gray-100 dark:bg-gray-600 h-10 w-full animate-pulse my-5"></div>
          <div className="bg-gray-100 dark:bg-gray-600 h-10 w-full animate-pulse"></div>
          <div className="bg-gray-100 dark:bg-gray-600 h-10 w-full animate-pulse mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetailsPlaceholder;
