import React, {FC} from 'react'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email',
}

const Input: FC<IInput> = ({label, placeholder, type}) => {
  return (
    <div>
      <span>{label}</span>
      <br />
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input