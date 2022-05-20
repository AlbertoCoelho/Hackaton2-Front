/* eslint-disable react/jsx-pascal-case */
//import { useState } from "react";
import axios from "axios";
import { $Container, $Main } from "./styles";

const HomePage = () => {
  /* const [name, setName] = useState("");
  console.log(name); */

  const URL = `${process.env.REACT_APP_API_BASE_URL}`;

  const promise = axios.get(URL)
  promise.then((res) => console.log(res.data))

  return (
    <$Container>
      <$Main>
        <img src="https://i.ibb.co/XX6BJFz/blackcat.png" alt="" />
        <h1>Jogo de Perguntas</h1>
        {/* <input type="text" id="" onChange={(e) => setName(e.target.value)} /> */}
        <span>
          <button>React </button>
          <button>JavaScript </button>
          <button>Mongo </button>
        </span>
      </$Main>
    </$Container>
  );
};

export default HomePage;
