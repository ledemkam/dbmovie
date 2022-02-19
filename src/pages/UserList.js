import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../Components/Card";
import Header from "../Components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=9703006802b31e02b012b8c0e38ca7d1&language=de-DE`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Favorit <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>momental kein favorit</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
