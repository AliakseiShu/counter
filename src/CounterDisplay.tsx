import React from 'react';

type CounterDisplayType = {
  counter:number
  }

export const CounterDisplay = (props: CounterDisplayType) => {

  return (
    <div>
      <div className={'counter === maxValue ? s.max : s.notMax'}><p>{props.counter}</p></div>
      </div>
  );
}
