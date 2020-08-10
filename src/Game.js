import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "./components/layout/Score";
import Board from "./components/layout/Board";
import Card from "./components/layout/Card";
import { shuffle, capitalize } from "./components/Helpers/Helpers";

export default function Word() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios
      .get("https://vast-inlet-60629.herokuapp.com/words/5")
      .then((res) => {
        const newWords = res.data.map((obj) => obj);
        setWords(newWords);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchWord = () => {
    window.location.reload(false);
    /*axios.get('http://127.0.0.1:5000/words/5')
            .then(res => {
                const newWords = res.data.map(obj => obj);
                
                setWords(newWords);
            })
            .catch(err => console.log(err));*/
  };

  return (
    <div className="container">
      <Score />
      <div className="flexbox">
        <div className="row">
          <div className="col">
            <h3>Orð</h3>
            <div className="board">
              {words.map((ord, i) => (
                <div className="wordCard" id={"ord" + ord.id} key={ord.id}>
                  <div>
                    {i + 1}. {capitalize(ord.ord)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <h3>Svar</h3>
            {words.map((ord, i) => (
              <div id="svarBord" key={i}>
                <Board
                  key={ord.id}
                  id={ord.flid}
                  ord={{ ord }}
                  className="board oneCard"
                >
                  <p className="bulletNumber text-white">{i + 1}</p>
                </Board>
              </div>
            ))}
          </div>

          <div className="col">
            <h3>Skýring</h3>

            <Board id="board-0" className="board">
              {shuffle(words).map((ord) => (
                <Card
                  id={ord.id}
                  className="card"
                  draggable="true"
                  key={ord.id}
                >
                  <p>{capitalize(ord.texti)}</p>
                </Card>
              ))}
            </Board>
          </div>
        </div>
        <div className="row ml-1">
          <h5>
            Dragðu skýringu í svardálkinn hjá orðinu sem þú telur að hún eigi
            við.
          </h5>
          <div className="ml-auto mr-3">
            <a
              style={{ backgroundColor: "black", borderColor: "black" }}
              className="btn btn-primary text-white mid-gray"
              onClick={fetchWord}
            >
              Birta ný orð
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
