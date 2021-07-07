import React from "react";

const TableItem = ({ children, left, center }) => {
  const align = () => {
    if (left) return "text-left";
    if (center) return "text-center";
    return "text-right";
  };
  return <th className={`p-2 px-4 font-normal ${align()}`}>{children}</th>;
};

export default TableItem;
