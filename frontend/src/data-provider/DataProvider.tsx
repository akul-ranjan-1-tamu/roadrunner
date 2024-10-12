import { DataPayload, DATASOURCE } from "./types";
import { createContext, useContext, useState } from "react";

interface DataProviderProps {
    source: DATASOURCE;
    children: React.ReactNode;
};

interface DataContextType {
    data: DataPayload | null;
    setData: React.Dispatch<React.SetStateAction<DataPayload | null>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({source, children}) => {
    const [data, setData] = useState<DataPayload | null>(null); 

    return <DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>;
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("tried to get data without proper context (make sure you are using DataProvider)");
    }
    return context;
};

export default DataProvider;

