import React, {FC, useState} from 'react'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email',
    value: string,
    onChange: (value: string) => void,
}

const Input: FC<IInput> = ({label, placeholder, type, value, onChange}) => {
  // const [inputValue, setinputValue] = useState('')

  // const handleInputChange = (event: React.ChangeEvent) => {
  //   setinputValue(event.currentTarget.value)
  // }
  
  return (
    <div>
      <span className='label'>{label}</span>
      <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.currentTarget.value)} />
    </div>
  );
}

export default Input