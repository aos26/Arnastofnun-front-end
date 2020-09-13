import React, { useState, useEffect, useCallback, createContext, useRef } from "react";
import axios from "axios";
import { shuffle, capitalize } from "./components/Helpers/Helpers";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder, move } from '../src/components/Helpers/Helpers';
import { isMobile } from 'react-device-detect';
import MenuIcon from "./components/layout/MenuIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";


export default function Word() {
  const [words, setWords] = useState([]);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(0);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    const sourceClone = Array.from(words[sInd]);
    const [cardSource] = sourceClone.splice(source.index, 1);
    const boardId = destination.droppableId - 1;
    const cardTarget = shuffledWords[boardId];

    if (sInd === dInd) {
      const items = reorder(words[sInd], source.index, destination.index);
      const newWords = [...words];
      newWords[sInd] = items;
      setWords(newWords);
    } else {
      if (cardSource.id === cardTarget.id) {
        cardSource.isRight = true;
        const newRightAnswer = rightAnswer + 1
        setRightAnswer(newRightAnswer);
        const result = move(words[sInd], words[dInd], source, destination);
        const newWords = [...words];
        newWords[sInd] = result[sInd];
        newWords[dInd] = result[dInd];
        setWords(newWords);
      } else {
        const newWrongAnswer = wrongAnswer + 1
        setWrongAnswer(newWrongAnswer);
        let newAnswerArray = [...answerArray];
        const index = dInd - 1;
        newAnswerArray[index] = true;
        cardTarget.isRight = false;
        setAnswerArray(newAnswerArray);

      }
      const totalAnswers = wrongAnswer + rightAnswer + 1;
      if (totalAnswers % 5 === 0 && totalAnswers >= 5) {
        resetGame();
      }
    }
  }

  const getListStyle = (isDraggingOver, i, isMobile) => (
    {
      background: isDraggingOver ? "#2D6FCB" : "#3CA5C5",
      padding: isMobile ? 5 : 15,
      width: "100%",
      maxWidth: isMobile ? 200 : 300,
      minHeight: 50,
      marginBottom: 10,
      borderRadius: 3,
    });

  async function resetGame() {
    setIsLoading(true);
    axios
      .get("https://vast-inlet-60629.herokuapp.com/words/5")
      .then((res) => {
        let newWords = res.data.map((obj) => obj);
        newWords.forEach(el => {
          el.isRight = null;
        });

        setWords([newWords, [], [], [], [], []]);

        const shuffledWords = JSON.parse(JSON.stringify(newWords));

        setShuffledWords(shuffle(shuffledWords));
        setAnswerArray([false, false, false, false, false]);
        setIsLoading(false);

      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://vast-inlet-60629.herokuapp.com/words/5")
      .then((res) => {
        let newWords = res.data.map((obj) => obj);
        newWords.forEach(el => {
          el.isRight = null;
        });

        setWords([newWords, [], [], [], [], []]);

        const shuffledWords = JSON.parse(JSON.stringify(newWords));

        setShuffledWords(shuffle(shuffledWords));
        setAnswerArray([false, false, false, false, false])
        setIsLoading(false);

      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container">
      {isMobile ? <MenuIcon /> :
        null}

      <div className="flexbox">
        <div className="scoreBoard" id="scoreBoardId">
          <div className="row ">
            <div className="col">
              <h3>
                Rétt svör: {rightAnswer}
              </h3>
            </div>
            <div className="col">
              <h3>
                Röng svör: {wrongAnswer}
              </h3>
            </div>
            <div className="col">
              <h3>
                <FontAwesomeIcon icon={faStopwatch} /> Tími: {time}
              </h3>
            </div>
          </div>
        </div>
        <div className="titleBoard">
          <div className="row ">
            <div className="col">
              <h3>Orð</h3>
            </div>
            <div className="col">
              <h3>Svar</h3>
            </div>
            <div className="col">
              <h3>Skýringar</h3>
            </div>
          </div>
        </div>
        <div className="row gameBoard">
          {isLoading ? <div className="loadingDiv">Sæki orðin <FontAwesomeIcon icon={faSpinner} spin /></div> : null}
          <div className="col">
            <div className="board questions">
              {shuffledWords.map((ord, i) => (
                <div className="wordCard" id={"ord" + ord.id} key={ord.id}>
                  <div>
                    {i + 1}. {capitalize(ord.ord)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="col">
              {words.map((ord, i) => (
                i !== 0 ?

                  <Droppable key={i} droppableId={`${i}`} isDropDisabled={ord.length === 1 ? true : answerArray[i - 1] ? true : false}>
                    {(provided, snapshot) => (

                      <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver, i--, isMobile)}
                        {...provided.droppableProps}
                        className={answerArray[provided.droppableProps["data-rbd-droppable-id"] - 1] ? "wrong" : "board"}
                      >
                        <div style={{ marginTop: -5 }}>
                          {provided.droppableProps["data-rbd-droppable-id"]}
                        </div>
                        {ord.map((item, i) => (
                          <div
                            id={item.id}
                            key={item.id}
                            className="card"
                            style={{ background: item.isRight ? "green" : "" }}
                          >
                            <p>{capitalize(item.texti)}</p>
                          </div>
                        ))}

                        {provided.placeholder}
                      </div>

                    )}
                  </Droppable>
                  : null
              ))}
            </div>
            <div className="col skyringar">

              {words.map((ord, i) => (
                i === 0 ?

                  <Droppable key={i} droppableId={`${i}`}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        //style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                      >
                        {ord.map((item, i) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id.toString()}
                            index={i}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div id="board-0" className="board">

                                  <div
                                    id={item.id}
                                    key={item.id}
                                    className="card"
                                  >
                                    <p>{capitalize(item.texti)}</p>
                                  </div>
                                </div>

                              </div>
                            )}

                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>

                    )}
                  </Droppable>
                  : null
              ))}
            </div>

          </DragDropContext>

        </div>
      </div>
    </div >
  );
}
