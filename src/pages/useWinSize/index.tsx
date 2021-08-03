import React,{useState,useEffect,useCallback} from 'react';

const useWinSize = () => {
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })
    const resize = useCallback(()=> {
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[]) 
    useEffect(()=>{
        window.addEventListener('resize',resize);
        return ()=>{
        window.removeEventListener('resize',resize)
        }
    },[])
    return size
}
const UseHooks = () => {
    const Size = useWinSize()
    return (
        <div>
          页面Size:{Size.width}x{Size.height}
        </div>
    )
}

export default UseHooks
