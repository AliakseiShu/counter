import React from 'react';

export type ButtonType = {
  name: string
  callBack: () => void
  disabled?: boolean

}
export const Button = (props: ButtonType) => {
  const onClickButtonHandler = () => {
    props.callBack()
  }
  return (
    <button
      onClick={onClickButtonHandler}
      disabled={props.disabled}
          >{props.name}</button>
  );
};

export default Button;