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
  titleMax:string
  titleStart:string
  classRedMax:string
  classRedStart:string
}
export const FirstCounter = (props: SecondCounterType) => {

  return (
    <div>
      <div className={s.inputTable}>
        <div className={s.input}>
        <Input
          title={props.titleMax}
          onChangeHandler={props.onChangeHandlerMax}
          value={props.valueInputMax}
          classRed={props.classRedMax}
        />
        </div>
        <div className={s.input}>
        <Input
          title={props.titleStart}
          onChangeHandler={props.onChangeHandlerStart}
          value={props.valueInputStart}
          classRed={props.classRedStart}
        />

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


