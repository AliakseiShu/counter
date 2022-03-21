import React from 'react';
import s from './First.module.css';

export type ButtonPropsType = {
  name: string
  callBack: () => void
  disabled?: boolean

}
export const Button = (props: ButtonPropsType) => {
  const onClickButtonHandler = () => {
    props.callBack()
  }
  return (
    <button
      onClick={onClickButtonHandler}
      className={`${s.btn} ${props.disabled === true ? s.disabled : ''}`}>
      {props.name}</button>
  );
};

export default Button;