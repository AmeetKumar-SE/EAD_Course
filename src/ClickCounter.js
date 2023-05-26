import React from "react";
import withCounter from "./hocExample";

function ClickCounter(props){
    return (
      <>
        <div>
          <h1>Hi {props.name}</h1>
          <label onClick={props.increment}>You Clicked Me {props.count}x Time </label>
        </div>
      </>
    );
}

export default withCounter(ClickCounter);
