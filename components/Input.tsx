import React from 'react';
interface InputProps {
    placeholder?:string;
    value?:string;
    type?:string;
    disabled?:boolean;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    styling?:string;

}


function Input({
    placeholder,
    type,
    value,
    disabled,
    onChange,
    styling
}:InputProps) {
  return (
      <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete="new-password"
          disabled={disabled}
          className={
              'w-full p-3 text-lg border-neutral-300  transition disabled:bg-opacity-70 disabled:bg-neutral-500 disabled:cursor-not-allowed my-2 border-[1px] rounded-xl outline-none focus:border-sky-500 focus:border-2 '  +
              styling
          }
      />
  )
}

export default Input