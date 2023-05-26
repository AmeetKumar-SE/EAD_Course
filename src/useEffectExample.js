// import { useEffect, useState } from "react"
// function  UseEffectExample(){

//     const [time, setTimer] = useState(new Date());

//     function tick(){
//         setTimer(new Date());
//     }

//     useEffect(()=>{
//         console.log("mputing1 & Updating1")
//         const timerid = setInterval(()=>{
//                 tick()
//         },1000)

//         return() => {

//             console.log("Unmouting1")

//             clearInterval(timerid);
//         }
//     }, [])


//     useEffect(()=>{
//         console.log("mputing2 & Updating2")
//         const timerid = setInterval(()=>{
//                 tick()
//         },1000)

//         return() => {

//             console.log("Unmouting2")

//             clearInterval(timerid);
//         }
//     }, [time])

//     return(
//         <div>{time.toLocaleTimeString()}</div>
//     )
// };

// export default UseEffectExample;