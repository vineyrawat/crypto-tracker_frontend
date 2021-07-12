import React, { useContext, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { UserContext } from "../../../../userContext";
import Button from "../../../global/Button/ButtonOutline";

function StarButton({ symbol }) {
  const [user] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [starred, setStarred] = useState(false);

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
