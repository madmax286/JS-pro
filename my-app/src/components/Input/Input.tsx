import React, {FC, useState, useRef, useEffect} from 'react'

interface IInput {
    label: string,
    placeholder: string,
    type: 'password' | 'email',
    value: string,
    onChange: (value: string) => void,
}

const Input: FC<IInput> = ({label, placeholder, type, value, onChange}) => {
  // const [counter, setCounter] = useState(0)

  // const inputRef = useRef<HTMLInputElement | null>(null)
  // console.log(inputRef);

  // useEffect(() => {
  //    if (counter%5 === 0) {
  //     inputRef.current?.focus()
  //    }
  // }, [counter])
  
  return (
    <div>
      {/* <button type="button" onClick={(e) => setCounter(counter + 1)}>
        Increment
      </button>
      <div>Counter {counter}</div> */}
      {/* <br /> */}
      <span className="label">{label}</span>
      <input
        // ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default Input