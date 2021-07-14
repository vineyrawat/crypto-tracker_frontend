import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from "../../../global/Button/ButtonOutline";

function StarButton({ symbol, watchlist }) {
  const [loading, setLoading] = useState(false);
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    if (!watchlist) return;
    if (watchlist.length === 0) return;
    watchlist.includes(symbol) && setStarred(true);
  }, [watchlist]);

  const toggleStar = () => {
    setLoading(true);
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
