import React from "react";

export default function AssetItem({ i, onClick }) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
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
      <span className="font-medium hover:underline">{i.name}</span>
      <span className="ml-2 text-sm text-gray-400">{i.symbol}</span>
    </div>
  );
}
