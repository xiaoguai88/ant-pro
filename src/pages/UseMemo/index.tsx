
import React , { useState,useMemo } from 'react';
import { Input ,Button} from 'antd';

const Index = () => {
    const [count,setCount] = useState<number>(0)
    const [value,setValue] = useState<string>('')
    const handleOnclick = () =>  {
        console.log('count==>');
        setCount(count+1);
    }
    const example = useMemo(() => {
        console.log('=========>');
        let sum = 0
        for(let i = 0;i < count; i++){
            sum += i
        }         
       return sum
    },[count])

    return (
        <div>
            <p>{count}-{value}-{example}</p>
            <Button onClick={handleOnclick}>+</Button>
            <Input value={value} onChange={(e)=>{
                setValue(e.target.value)
                }} style={{width:'200px'}} />
        </div>
    )
}

export default Index

// import React, { useMemo, useState,memo } from 'react'

// const Child = memo(() => {
//     const date = new Date()
//     return (
//       <div>
//         当前时间:{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
//       </div>
//     )
//   })
  
//   const Parent = () => {
//     const [count, setCount] = useState(0)
//     const [clickTimeCount, setClickTimeCount] = useState(0)
//     const timeOption = useMemo(() => {
//       return { clickTimeCount }
//     }, [clickTimeCount])
  
//     return (
//       <div>
//         <div>count: {count}</div>
//         <button onClick={() => {
//           setCount(count + 1)
//         }}>+1</button>
//         <button onClick={() => {
//           setClickTimeCount(clickTimeCount + 1)
//         }}>get current time</button>
//         <Child count={timeOption}/>
//       </div>
//     )
//   }
  
//   function App() {
//     return <div><Parent /></div>
//   }

// export default App