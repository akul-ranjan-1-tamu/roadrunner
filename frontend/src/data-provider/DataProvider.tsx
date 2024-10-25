import { DataPayload, DATASOURCE } from "./types";
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

interface DataProviderProps {
    children: React.ReactNode;
};

interface DataContextType {
    data: DataPayload[] | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({children}) => {
    const [data, setData] = useState<DataPayload[] | null>(null); 

    useEffect(() => {
        const socket = io("http://localhost:5000");

        socket.on('id', (newData: DataPayload) => {
            console.log("new data: ", newData);
            setData((prevData) => prevData ? [...prevData, newData] : [newData]);
        }); 

        return () => {
            socket.disconnect();
        }
    }, []);

    return <DataContext.Provider value={ {data} }>{children}</DataContext.Provider>;
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("tried to get data without proper context (make sure you are using DataProvider)");
    }
    return context;
};

export default DataProvider;

