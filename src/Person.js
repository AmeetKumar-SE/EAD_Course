import React from "react";
const pi = 3.14
const PersonContext = React.createContext()
const PersonProvider = PersonContext.Provider;
const PersonConsumer = PersonContext.Consumer;

export {PersonProvider,PersonConsumer}