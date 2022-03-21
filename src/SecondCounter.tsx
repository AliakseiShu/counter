import React from 'react';
import Button from "./Button";
import { CounterDisplay } from "./CounterDisplay";
import s from './First.module.css';

type CounterType = {
  inc: () => void
  reset: () => void
  valueInputMax: number
  counter: number
  edit:string | null

}
export const SecondCounter = (props: CounterType) => {

  return (

    <div>
      <div className={s.display}>
        <CounterDisplay
          counter={props.counter}
          maxValue={props.valueInputMax}
          edit={props.edit}
        />
      </div>
      <div className={s.buttonTable}>
        <div>
          <Button
            name={'inc'}
            callBack={props.inc}
            disabled={props.counter >= props.valueInputMax ? true : false}
          />
        </div>
        <div>
          <Button
            name={'reset'}
            callBack={props.reset}
            disabled={props.counter >= props.valueInputMax ? true : false}
          />
        </div>
      </div>
    </div>

  );
}


