import React from "react";
import Answers from "./Answers";
export default function Question({
  ques,
  ans,
  unAns,
  resStore,
  id,
  handleAns,
  state
}) {
  return (
    <div className="que-div">
      <h1 className="ques"> {ques} </h1>

      <Answers
        ans={ans}
        unAns={unAns}
        resStore={resStore}
        id={id}
        handleAns={handleAns}
        state={state}
      />
    </div>
  );
}
