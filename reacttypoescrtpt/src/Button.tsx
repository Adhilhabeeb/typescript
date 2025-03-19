import React, { JSX } from 'react'

type  inputtypes="text"|"number"
interface pro{
   ref:React.RefObject<HTMLButtonElement> ,
    name:()=> void ,
    type:inputtypes,
    children:React.ReactNode,
    setcount:React.Dispatch<SetStateAction<number>>
} 
function Button({children,setcount,type,name,ref}:pro) {
  return (
  <button  ref={ref}  onClick={()=>{
    setcount((prev:number)=>prev+1)
name()

  } }>
    {children}  {type}
  </button>
  )
}

export default Button