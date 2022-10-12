import { useState } from "react";
import { Person } from "./Person";

export const App2 = () => {

  const me = {
    fn: 'R',
    ln: 'N',
    mn: 'D'
  }

  const [meState, setMeState] = useState(me);

  return <>

    <button onClick={
      () => {
        console.table(meState);
        setMeState(
          {
            ...meState,
            fn: 'Mickey',
            mn: 'Theodore'
          }
        ); // me.fn = 'Mickey'; // mutate React state
        console.table(meState);
      }
    }>change first name of me that React DOES NOT ignore</button>
    <button onClick={
      () => {
        console.table(meState);
        setMeState({
          ...meState,
          ln: 'Mouse'
        }); // me.ln = 'Mouse'; // mutate React state
        console.table(meState);
      }
    }>change last name of me that React DOES NOT ignore</button>
    {/* <p>{meState.fn} {meState.mn} {meState.ln}</p> */}
    <Person name={meState} />

    <hr />
    <p>{me.fn} {me.ln}</p>
    <button onClick={
      () => {
        console.table(me);
        me.fn = 'Mickey'; // mutate data
        console.table(me);
      }
    }>change first name of me that React ignores</button>

    {/* <button click="alert('btn was clicked')">change first name</button> */}
  </>
}