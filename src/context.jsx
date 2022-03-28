import { createContext } from "react";

export const Context =  createContext();
export const ContextProvider = ({Children}) => {
    return <Context.Provider value={Children}>
        {Children}
    </Context.Provider>
}