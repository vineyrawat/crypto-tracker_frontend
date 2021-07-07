import React from "react";

function AssetTablePlaceholder(props) {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <tr key={i}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <th className="p-2 min-w-[80px]" key={i}>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-9 animate-pulse" />
            </th>
          ))}
        </tr>
      ))}
    </>
  );
}

export default AssetTablePlaceholder;
