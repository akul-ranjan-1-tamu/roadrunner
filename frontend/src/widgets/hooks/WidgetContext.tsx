import { createContext, useContext, useRef, useState } from "react";
import { Widget, WidgetConfig } from "../types";

interface DataProviderProps {
    children: React.ReactNode;
};

interface WidgetLayoutContextType {
    widgets: Widget[];
    setWidgets: (widgets: Widget[]) => void;
    editConfig: (i: string, newconfig: WidgetConfig) => void;
    deleteWidget: (i: string) => void;
    addWidget: (newWidget: Widget) => void;
};

export const WidgetLayoutContext = createContext<WidgetLayoutContextType>( {widgets: [], setWidgets: () => {}, editConfig: () => {}, deleteWidget: () => {}, addWidget: () => {}} );

const WidgetProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [widgets, setWidgets] = useState<Widget[]>([]);

    const editConfig = <T extends WidgetConfig>(i: string, newConfig: T) => {
        setWidgets(widgets.map((widget) => {if (widget.i === i) return {...widget, config: newConfig}; else return widget}));
    };
    
    const deleteWidget = (i: string) => {
        console.log(
            "deleting", i
        );

        console.log(
            "filtered", widgets.filter((widget) => { return widget.i != i})
        )
        //setWidgets(widgets.filter((widget) => { return widget.i != i}));
        setWidgets([]); 
    };
    
    const addWidget = (newWidget: Widget) => {
        setWidgets([...widgets, {...newWidget}]);
    }
    

    return <WidgetLayoutContext.Provider value={ {widgets, setWidgets, editConfig, deleteWidget, addWidget} } >{children}</WidgetLayoutContext.Provider>;
};

export const useWidgets = () => {
    const context = useContext(WidgetLayoutContext);
    if (!context) {
        throw new Error("tried to access widgets without context (make sure you are using WidgetProvider)");
    }

    return context;
};

export default WidgetProvider;

