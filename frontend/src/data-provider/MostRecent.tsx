import { useContext } from "react";
import { DataContext } from "./DataProvider";

export const mostRecent = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("tried to get data without proper context (make sure you are using DataProvider)");
    }
    return context;
};