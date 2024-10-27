import { useState } from "react";
import { useData } from "../../data-provider/DataProvider";
import { WidgetProps, WidgetConfig, FormProps, ComponentWithForm, RESIZE_HANDLES } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";
import { WIDGET_TYPE } from "../types";

export interface BasicDisplayConfig extends WidgetConfig {
    dataKey: string;
}

interface BasicDisplayProps extends WidgetProps {
    config: BasicDisplayConfig;
}

const BasicDisplay: ComponentWithForm<BasicDisplayProps, FormProps, BasicDisplayConfig> = ({ selected, config }) => {
    const { data } = useData();
    const [configState, setConfig] = useState<BasicDisplayConfig>(config);
    const value = data[configState.dataKey] ? data[configState.dataKey].value : null;


    return <WidgetWrapper>{configState.dataKey}: {value}</WidgetWrapper>;
};

BasicDisplay.form = ({ config, setConfig }) => {

    return (
        <div>
        </div>
    );
};

BasicDisplay.defaultConfig = {
    title: "Basic Display",
    w: 1, 
    h: 1,
    availableHandles: RESIZE_HANDLES,
    type: WIDGET_TYPE.BASIC_DISPLAY,
    dataKey: "speed"
}

export default BasicDisplay;