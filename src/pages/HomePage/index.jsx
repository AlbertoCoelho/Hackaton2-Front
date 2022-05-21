/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
//import { useState } from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { $Container, $Main } from "./styles";

const HomePage = () => {

  const [games, setGames] = useState([])
  const { user, setUser } = useContext(UserContext)

  const URL = `${process.env.REACT_APP_API_BASE_URL}`;
  useEffect(() => {
    const promise = axios.get(URL)
    promise.then(({ data }) => {
      console.log(data)
      setGames(data)
    })
  }, [])

  const navigate = useNavigate()

  return (
    <$Container>
      <$Main>
        <img src="https://i.ibb.co/XX6BJFz/blackcat.png" alt="" />
        <h1>Triolinguo</h1>
        {/* <input type="text" id="" onChange={(e) => setName(e.target.value)} /> */}
        <span>
          {games.map(game => <button
            onClick={() => {
              setUser({ ...user, type: game.title.toLowerCase() })
              navigate('/game')
            }}
            key={game.title}
          >{game.title}</button>)}
        </span>
      </$Main>
    </$Container>
  );
};

export default HomePage;
