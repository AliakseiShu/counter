import React from 'react';
import s from './CounterDisplay.module.css'

export type CounterDisplayType = {
  counter: number
  maxValue: number
}

export const CounterDisplay = (props: CounterDisplayType) => {
/*let newCounterStyle = props.counter === props.maxValue ? s.maxOn : s.maxOff
  console.log(typeof s.maxOn)*/
  return (
         <div className={`${props.counter === props.maxValue ? s.maxOn : s.maxOff}`}>
           <p>{props.counter}</p>
         </div>
        );
}
/*
className={'counter === maxValue ? style.max : style.notMax'}*/
