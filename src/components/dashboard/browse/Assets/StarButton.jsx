import React, { useState, useEffect } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from "../../../global/Button/ButtonOutline";

const localWatchlist = {
  get() {
    const data = localStorage.getItem("watchlist");
    return data ? data.split(",") : [];
  },
  add(symbol) {
    if (this.get().includes(symbol)) return;
    return localStorage.setItem("watchlist", [...this.get(), symbol]);
  },
  remove(symbol) {
    let arr = this.get();
    if (!arr.includes(symbol)) return;
    arr.splice(arr.indexOf(symbol), 1);
    return localStorage.setItem("watchlist", arr);
  },
};

function StarButton({ symbol }) {
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState(null);
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    setWatchlist(localWatchlist.get() || []);
  }, []);

  useEffect(() => {
    if (watchlist) {
      watchlist.includes(symbol) ? setStarred(true) : setStarred(false);
      setLoading(false);
    }
  }, [watchlist]);

  const toggleStar = () => {
    setLoading(true);
    starred ? localWatchlist.remove(symbol) : localWatchlist.add(symbol);
    setStarred(!starred);
    setLoading(false);
  };

  return (
    <Button
      onClick={toggleStar}
      isLoading={loading}
      isFullWidth
      variant={starred ? "primary" : "gray"}
      className="rounded-full mx-auto"
      size="sm"
    >
      {starred ? (
        <BsStarFill className="text-primary text-lg" />
      ) : (
        <BsStar className="text-lg" />
      )}
    </Button>
  );
}

export default StarButton;
