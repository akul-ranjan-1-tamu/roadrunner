import { ChangeEvent, useState } from "react";
import { useData } from "../../data-provider/DataProvider";
import { WidgetProps, WidgetConfig, FormProps, WidgetType, RESIZE_HANDLES } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";
import { WIDGET_TYPE } from "../types";
import { DATASTREAM, datastreams } from "../../shared-types";


// define all the configurable options unique to this widget type
export interface BasicDisplayConfig extends WidgetConfig {
    dataKey: DATASTREAM;
}

//specify the particlar configuration type 
interface BasicDisplayProps extends WidgetProps {
    config: BasicDisplayConfig;
}

//component which defines the widget (and its behavior)
const BasicDisplay: WidgetType<BasicDisplayProps, FormProps<BasicDisplayConfig>, BasicDisplayConfig> = ({ selected, config }) => {
    const { data } = useData();
    const [configState, setConfig] = useState<BasicDisplayConfig>(config);
    const value = data[configState.dataKey] ? data[configState.dataKey].value : null;

    //make sure to use the widget wrapper!
    return <WidgetWrapper selected={selected} config={configState} setConfig={setConfig} Form={BasicDisplay.form}>{configState.dataKey}: {value}</WidgetWrapper>;
};


//defines form which edits the configurable settings
BasicDisplay.form = ({ config, setConfig }: FormProps<BasicDisplayConfig>) => {
    // Handle changes to the selected datastream type
    const handleDataKeyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newDataKey = event.target.value as DATASTREAM;
        setConfig({ ...config, dataKey: newDataKey });
    };

    return (
        <div>
            <label htmlFor="dataKeySelect">Select Data Stream:</label>
            <select
                id="dataKeySelect"
                value={config.dataKey}
                onChange={handleDataKeyChange}
            >
                {datastreams.map((datastream) => (
                    <option key={datastream} value={datastream}>
                        {datastream}
                    </option>
                ))}
            </select>
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