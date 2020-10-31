import React from "react";
import "./Btns.css";
import Button from "@material-ui/core/Button";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Btns(props) {
  const {
    fetchComic,
    fetchLastestComic,
    fetchRandomComic,
    comic,
    lastestComic,
  } = props;

  return (
    <div className="btns">
      <Button
        variant="contained"
        color="primary"
        disabled={comic.num === 1}
        onClick={() => fetchComic(1)}
      >
        <FirstPageIcon />
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={comic.num <= 1}
        onClick={() => {
          if (comic.num > 1) {
            fetchComic(comic.num - 1);
          }
        }}
      >
        <ArrowBackIosIcon /> Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fetchRandomComic()}
      >
        Random
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fetchComic(comic.num + 1)}
        disabled={comic.num === lastestComic}
      >
        Next
        <ArrowForwardIosIcon />
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={comic.num === lastestComic}
        onClick={() => fetchLastestComic()}
      >
        <LastPageIcon />
      </Button>
    </div>
  );
}

export default Btns;
