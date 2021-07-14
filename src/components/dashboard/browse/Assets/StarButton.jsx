import React, { useContext, useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from "../../../global/Button/ButtonOutline";
import { UserContext } from "../../../../userContext";
import { watchlist as wlist } from "../../../../services/api/Auth";

function StarButton({ symbol, watchlist }) {
  const [loading, setLoading] = useState(false);
  const [starred, setStarred] = useState(false);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (!watchlist) return;
    if (watchlist.length === 0) return;
    watchlist.includes(symbol) && setStarred(true);
  }, [watchlist]);

  const toggleStar = () => {
    setLoading(true);
    if (starred) {
      wlist
        .remove(symbol)
        .then((data) => {
          watchlist.splice(watchlist.indexOf(symbol), 1);
          setLoading(false);
          return setStarred(false);
        })
        .catch();
    }
    if (!starred) {
      wlist
        .add(symbol)
        .then((data) => {
          watchlist.push(symbol);
          setLoading(false);
          return setStarred(true);
        })
        .catch();
    }
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
