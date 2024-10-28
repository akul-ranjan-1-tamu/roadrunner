import { useState } from "react";
import { useData } from "../../data-provider/DataProvider";
import { WidgetProps, WidgetConfig, FormProps, ComponentWithForm, RESIZE_HANDLES } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";
import { WIDGET_TYPE } from "../types";
import { DATASTREAM } from "../../shared-types";


// define all the configurable options unique to this widget type
export interface BasicDisplayConfig extends WidgetConfig {
    dataKey: DATASTREAM;
}

//specify the particlar configuration type 
interface BasicDisplayProps extends WidgetProps {
    config: BasicDisplayConfig;
}

//component which defines the widget (and its behavior)
const BasicDisplay: ComponentWithForm<BasicDisplayProps, FormProps, BasicDisplayConfig> = ({ selected, config }) => {
    const { data } = useData();
    const [configState, setConfig] = useState<BasicDisplayConfig>(config);
    const value = data[configState.dataKey] ? data[configState.dataKey].value : null;

    //make sure to use the widget wrapper!
    return <WidgetWrapper selected={selected} config={configState} setConfig={setConfig} Form={BasicDisplay.form}>{configState.dataKey}: {value}</WidgetWrapper>;
};


//defines form which edits the configurable settings
BasicDisplay.form = ({ config, setConfig }) => {

    
    return (
        <div>
            form!!!!
        </div>
    );
};

//define the default configuration
BasicDisplay.defaultConfig = {
    title: "Basic Display",
    w: 1, 
    h: 1,
    availableHandles: RESIZE_HANDLES,
    type: WIDGET_TYPE.BASIC_DISPLAY,
    dataKey: "speed"
} as BasicDisplayConfig;

export default BasicDisplay;