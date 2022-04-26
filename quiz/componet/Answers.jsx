import React from "react";

export default function Answers({
  ans,
  unAns,
  resStore,
  id,
  handleAns,
  state
}) {
 

  const [all, setAll] = React.useState([]);
  const { wAns, cAns } = resStore[id - 1];

  React.useEffect(()=> {
    const allAns = [...unAns, ans].sort(() => {
      return Math.random() > 0.5 ? 1 : -1;
    });
    setAll(allAns)
  }, [ans,unAns])

  const answes = all.map((i) => (
    <span
      className="ans"
      style={{
        backgroundColor: state.result
          ? cAns === i
            ? "lightGreen"
            : wAns === i && "red"
          : wAns === i && "yellow"
      }}
      onClick={() => {
        console.log("this is cclikc", id, i, ans);
        handleAns(id, i, ans);
      }}
    >
      {i}
    </span>
  ));
  return <div>{answes}</div>;
}
