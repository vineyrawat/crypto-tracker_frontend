import React from "react";

function HomePageHeader(props) {
  return (
    <header className="h-14 border-b">
      <div className="flex justify-between items-center container max-w-7xl mx-auto px-4 h-full">
        <h2 className="font-bold text-2xl">
          Crypto<span className="text-yellow-500">Tracker</span>
        </h2>
      </div>
    </header>
  );
}

export default HomePageHeader;
