import React, { useState } from "react";
import withCounter from "./CounterHOC";

function KeyPressCounter(props){

    return <>
    <input type="text" onKeyDown={props.increment}></input>
    <labe>You have press {props.count}x Times Key Down</labe>
    </>
}

export default withCounter(KeyPressCounter)