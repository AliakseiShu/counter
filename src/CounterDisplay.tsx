import React from 'react';
import s from './First.module.css'

export type CounterDisplayType = {
  counter: number
  maxValue: number
  edit:string | null
}

export const CounterDisplay = (props: CounterDisplayType) => {
  let result = props.edit === 'Incorrect value' ? s.errorMessage : s.normalMessage
  let resultColor = props.counter === props.maxValue ? s.maxOn : s.maxOff
  return (
         <div>
           {props.edit ? <div className={result}>{props.edit}</div> : <div className={resultColor}> {props.counter}</div>}
         </div>
        );
}

