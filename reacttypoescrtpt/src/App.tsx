import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFrame, useThree } from '@react-three/fiber'
import { admion, usertypoeui } from './types.'
import Button from './Button'

function App() {
  const [count, setCount] = useState<number> (0)

  const [user, setuser] = useState<usertypoeui  <string>>({email:""})
let uu=useRef<HTMLButtonElement>()
const [admin, setadmin] = useState<admion<string,string>| string> ({email:"adfhj@hvgnmv",name:"adfhjjh"})

  function name():void {
  
alert(admin.email?? admin.name)
 
  setadmin({name:"hjh"})
  }
  return (
    <>
      <div>
        <Button type="text" ref={uu} name={name}  setcount={setCount}>
          hloo {count}
        </Button>
       </div>
    </>
  )
}

export default App
