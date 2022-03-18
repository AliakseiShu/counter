import React, { ChangeEvent } from 'react';
import { Input } from "./Input";
import Button from "./Button";
import s from './First.module.css';

type SecondCounterType = {
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
  valueInputMax: number
  valueInputStart: number
  set: () => void
  disablesInc:boolean
}
export const FirstCounter = (props: SecondCounterType) => {

  return (
    <div>
      <div className={s.inputTable}>
        <div className={s.input}>
        <Input
          onChangeHandler={props.onChangeHandlerMax}
          value={props.valueInputMax}
        />
        </div>
        <div className={s.input}>
        <Input
          onChangeHandler={props.onChangeHandlerStart}
          value={props.valueInputStart}/>
          </div>
      </div>
      <div className={s.inputButton}>
        <Button
          name={'set'}
          callBack={props.set}
          disabled={props.disablesInc}
        />
      </div>
    </div>

  );
}


