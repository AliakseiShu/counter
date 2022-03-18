import React, { ChangeEvent } from 'react';


type InputPropsType = {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  value: number
}
export const Input = (props: InputPropsType) => {
  return (
    <>
      <input type={"number"} onChange={props.onChangeHandler} value={props.value}/>
    </>
  );
};

