import React, { ChangeEvent } from 'react';


type InputPropsType = {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  value: number
  title:string
  classRed:string

}
export const Input = (props: InputPropsType) => {
  return (
    <>
      {props.title}<input className={props.classRed}
                          type={"number"}
                          onChange={props.onChangeHandler}
                          value={props.value}/>
    </>
  );
};

