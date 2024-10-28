import BasicDisplay, { BasicDisplayConfig } from "../basic-display/BasicDisplay";
import { WIDGET_TYPE, WidgetConfig } from "../types";


//TODO: Should take in type and config, then render using correct config
export const getWidgetComponent: (config: WidgetConfig, selected: boolean) => JSX.Element = (config: WidgetConfig, selected: boolean) => {
    const widgetType = config.type;
    
    if (widgetType === WIDGET_TYPE.BASIC_DISPLAY) {
        return <BasicDisplay selected={selected} config={config as BasicDisplayConfig} />
    }
    else {
        return <BasicDisplay selected={selected} config={config as BasicDisplayConfig} />
    }
};