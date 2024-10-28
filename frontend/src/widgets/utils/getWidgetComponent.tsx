import BasicDisplay, { BasicDisplayConfig } from "../basic-display/BasicDisplay";
import Dial, { DialConfig } from "../dial/dial";
import { WIDGET_TYPE, WidgetConfig } from "../types";


export const getWidgetComponent: (config: WidgetConfig, selected: boolean) => JSX.Element = (config: WidgetConfig, selected: boolean) => {
    const widgetType = config.type;
    
    if (widgetType === WIDGET_TYPE.BASIC_DISPLAY) {
        return <BasicDisplay selected={selected} config={config as BasicDisplayConfig} />
    }
    else if (widgetType === WIDGET_TYPE.DIAL) {
        return <Dial selected={selected} config={config as DialConfig} />
    }
    else {
        return <BasicDisplay selected={selected} config={config as BasicDisplayConfig} />
    }
};