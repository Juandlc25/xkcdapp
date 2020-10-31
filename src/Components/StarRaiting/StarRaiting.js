import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRaiting.css";

function StarRaiting() {
  const [raiting, setRaiting] = useState(null);

  return (
    <div className="starRaiting">
      {[...Array(5)].map((star, index) => {
        const raitingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={raitingValue}
              onClick={() => setRaiting(raitingValue)}
            />
            <FaStar
              className="starRaiting__star"
              size={50}
              color={raitingValue <= raiting ? "#fcc107" : "#7B7B7B"}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRaiting;
