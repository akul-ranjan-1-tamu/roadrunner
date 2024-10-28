import { createContext, useContext, useState } from "react";
import { Widget, WidgetConfig } from "../types";

interface DataProviderProps {
    children: React.ReactNode;
};

interface WidgetLayoutContextType {
    widgets: Widget[];
    setWidgets: (widgets: Widget[]) => void;
};

export const WidgetLayoutContext = createContext<WidgetLayoutContextType>( {widgets: [], setWidgets: () => {}} );

const WidgetProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [widgets, setWidgets] = useState<Widget[]>([]);

    return <WidgetLayoutContext.Provider value={ {widgets, setWidgets} } >{children}</WidgetLayoutContext.Provider>;
};

export const editConfig = (i: string, newConfig: WidgetConfig) => {
    const context = useContext(WidgetLayoutContext);
    if (!context) {
        throw new Error("tried to edit widget config without context (make sure you are using WidgetProvider)");
    }

    const {widgets, setWidgets} = context;
    setWidgets(widgets.map((widget) => {if (widget.i === i) return {...widget, config: newConfig}; else return widget}));
};

export const addWidget = (newWidget: Widget) => {
    const context = useContext(WidgetLayoutContext);
    if (!context) {
        throw new Error("tried to add widget config without context (make sure you are using WidgetProvider)");
    }
    const {widgets, setWidgets} = context;
    setWidgets([...widgets, newWidget]);
}


export default WidgetProvider;

