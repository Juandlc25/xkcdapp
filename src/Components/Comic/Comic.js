import React from "react";
import "./Comic.css";

function Comic(props) {
  const { comic } = props;

  return (
    <div className="comic">
      <h2 className="comic__title">{comic.title}</h2>
      <img className="comic__img" alt="comicImg" src={comic.img} />
    </div>
  );
}

export default Comic;
