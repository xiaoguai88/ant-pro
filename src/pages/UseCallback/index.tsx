import React, { useState,useCallback,memo } from 'react'

interface ChildProps {
  name: string;
  setName: () => void;
}
const Child = memo((props: ChildProps) => {
  console.log('child===>');
  return <div>{props.name}</div>
})
const UseCallback = () => {
  const [count ,updateCount] = useState<number>(0)
  const [name ,setName] = useState<string>('ami')
  const changeName = useCallback(() => {
    console.log('changeName======>');
    setName('lisha')
  },[]) 
    return (
        <div>
          <p>{count}</p>
          <button onClick={()=>updateCount(count + 1)}>+</button>
          <Child name={name}  setName={changeName} /> 
        </div>
    )
}

export default UseCallback
