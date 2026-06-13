
import type{ UseFormRegister } from "react-hook-form"
import React from "react"
type Iprops={
  label:string,
  
    register:UseFormRegister<any>,
name:string,
type:"text" | "password" |"number"
placeholder:string,
_id:string,
error?:string
}

export const Input: React.FC<Iprops> = ({ name, placeholder, type, _id, label, register, error }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <label htmlFor={_id}>{label}</label>

      {name !== 'detailed_description' ? (
        <input
          {...register(name)}
          className="border-2 flex p-2 h-10 w-full text-sm rounded-xl"
          id={_id}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          {...register(name)} 
          id={_id}
          className="border-2 h-fit w-full rounded-xl p-2"
          placeholder={placeholder}
        />
      )}

      <div className="w-full">
        <p className="text-sm text-red-500">{error}</p>
      </div>
    </div>
  )
}