import React from "react";
import Question from "../componet/Question";
export default function TestPage(prop) {
  const data = prop.data.map((i , ind) => (
    <Question key = {ind} id = {ind+1}
      ques={i.question}
      ans={i.correct_answer}
      unAns={i.incorrect_answers}
      resStore = {prop.ansObj}
      handleAns = {prop.handleAns}
      state={prop.state}
    />
  ));

  return (
    <div className="testMain">
      {data}

      <button className="startButton" onClick = {()=> {
        if(prop.state.result) {
          window.location.reload(false)
        }
         prop.change("result")
      }}>{prop.state.result? "restart" :"Check Answers"}</button>
    </div>
  );
}
