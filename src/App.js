import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Comic from "./Components/Comic/Comic";
import Btns from "./Components/Btns/Btns";
import Loading from "./Components/Loading/Loading";
import StarRaiting from "./Components/StarRaiting/StarRaiting";

function App() {
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastestComic, setLatestComic] = useState(null);

  const fetchComic = (number) => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://xkcd.com/${number}/info.0.json`
      )
      .then((res) => setComic(res.data))
      .catch((error) => console.log("error: ", error))
      .finally(() => setLoading(false));
  };

  const fetchFirstComic = (number = 1) => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://xkcd.com/${number}/info.0.json`
      )
      .then((res) => setComic(res.data))
      .catch((error) => console.log("error: ", error))
      .finally(() => setLoading(false));
  };

  const fetchRandomComic = () => {
    let num = Math.floor(Math.random() * 601);
    fetchComic(num);
  };

  const fetchLastestComic = () => {
    setLoading(true);
    axios
      .get("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json")
      .then((res) => {
        setComic(res.data);
        setLatestComic(res.data.num);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchFirstComic();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />{" "}
      </div>
    );
  }
  return (
    <div className="app">
      <Comic comic={comic} />
      <Btns
        comic={comic}
        fetchComic={fetchComic}
        fetchLastestComic={fetchLastestComic}
        fetchRandomComic={fetchRandomComic}
        lastestComic={lastestComic}
      />
      <StarRaiting />
    </div>
  );
}

export default App;
