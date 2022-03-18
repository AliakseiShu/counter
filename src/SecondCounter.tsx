import React, { ChangeEvent } from 'react';
import { Input } from "./Input";
import Button from "./Button";
import s from './Button.module.css';

type SecondCounterType = {
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
  valueInputMax: number
  valueInputStart: number
  set: () => void
}
export const SecondCounter = (props: SecondCounterType) => {

  return (
    <div className={s.display}>
      <div className={s.display}>
        <Input
          onChangeHandler={props.onChangeHandlerMax}
          value={props.valueInputMax}
        />
        <Input
          onChangeHandler={props.onChangeHandlerStart}
          value={props.valueInputStart}/>
      </div>
      <div className={s.buttonBox}>
        <Button
          name={'set'}
          callBack={props.set}
        />
      </div>
    </div>

  );
}


