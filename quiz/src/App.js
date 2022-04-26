import "./styles.css";
import EnteryPage from "../componet/EnteryPage";
import TestPage from "../componet/TestPage";
import Confetti from "react-confetti";
import React from "react";
export default function App() {
  const [state, setState] = React.useState({
    start: true,
    test: false,
    result: false
  });

  const [data, setData] = React.useState([]);

  const [answerHold, setAnswerHold] = React.useState([
    { id: 1, wAns: "", cAns: "" },
    {
      id: 2,
      wAns: "",
      cAns: ""
    },
    {
      id: 3,
      wAns: "",
      cAns: ""
    },
    {
      id: 4,
      wAns: "",
      cAns: ""
    },
    {
      id: 5,
      wAns: "",
      cAns: ""
    }
  ]);

  const handleAns = (id, rAns, crAns) => {
    setAnswerHold((prev) =>
      prev.map((i) => (i.id === id ? { ...i, wAns: rAns, cAns: crAns } : i))
    );
  };

  function handeState(value) {
    setState((prev) => {
      return {
        ...prev,
        [value]: !prev[value]
      };
    });
  }

  React.useEffect(() => {
    console.log("use effectin is calling");
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);

  return (
    <div className="App">
      {state.result && <Confetti />}
      {state.start && <EnteryPage state={state} change={handeState} />}
      {!state.start && (
        <TestPage
          state={state}
          data={data}
          ansObj={answerHold}
          handleAns={handleAns}
          change={handeState}
        />
      )}
    </div>
  );
}
