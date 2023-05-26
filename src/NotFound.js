import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound(){

    const location = useLocation();
    const name = location.state ? location.state.name : "Unknown";

    return<>    
        <h2>Not Found</h2>
        <h1>{name}</h1>
    </>
}