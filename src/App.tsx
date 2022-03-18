import React, { ChangeEvent, useState } from 'react';
import './App.css';
import s from './Counter.module.css';
import { Counter } from './Counter'
import { SecondCounter } from "./SecondCounter";

function App() {

  const maxValue = 5

  let [counter, setCounter] = useState(0)


  let [valueInputMax, setValueInputMax] = useState(0)
  let [valueInputStart, setValueInputStart] = useState(0)


  const inc = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }
  }
  const reset = () => {
    setCounter(0)
  }

  const set = () => {
    setCounter(0)
  }


  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInputMax(Number(e.currentTarget.value))
  }
  const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInputStart(Number(e.currentTarget.value))
  }

  return (
    <div className="App">
      <div className={s.counter}>
        <Counter
          inc={inc}
          reset={reset}
          maxValue={maxValue}
          counter={counter}
        />
      </div>
      <div className={s.counter}>
        <SecondCounter
          onChangeHandlerMax={onChangeHandlerMax}
          onChangeHandlerStart={onChangeHandlerStart}
          valueInputMax={valueInputMax}
          valueInputStart={valueInputStart}
          set={set}

        />
      </div>
    </div>
  );
}

export default App;
