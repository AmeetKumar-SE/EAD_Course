import { useState } from "react";

export default function Counter(props){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(coun+1)
    }

    return <>
    {props.render(count, increment)}
    
    </>
}