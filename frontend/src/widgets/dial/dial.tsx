import { useData } from "../../data-provider/DataProvider";
import { DATASTREAM } from "../../shared-types";
import { FormProps, WidgetConfig, WidgetProps, WidgetType } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";



export interface DialConfig extends WidgetConfig {
    dataKey: DATASTREAM;
};

interface DialProps extends WidgetProps {
    config: DialConfig;
};

const Dial: WidgetType<DialProps, FormProps<DialConfig>, DialConfig> = ({ selected, config}) => {
    const { data } = useData();
    const value = data[config.dataKey] ? data[config.dataKey] : null;

    
};

Dial.form = ({ config, setConfig }) : FormProps<DialConfig> => {

    //render a form for the user to change the config

};

Dial.defaultConfig = {
    title: "Basic Display",
    w: 1, 
    h: 1,
    availableHandles: RESIZE_HANDLES,
    type: WIDGET_TYPE.BASIC_DISPLAY,
    dataKey: "speed"
} as DialConfig;

export default Dial;