import React, { useState } from "react";

export default function withCounter(WrappedComponent){

    function NewComponent(props){
        const [count, setCount] = useState(0)

        function increment(){
            setCount(count+1)
        }

        return <WrappedComponent count={count} increment={increment} {...props}/>
    }

    return NewComponent;

}