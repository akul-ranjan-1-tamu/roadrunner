import BasicDisplay from "../basic-display/BasicDisplay";
import { WIDGET_TYPE } from "../types";

export const getWidgetComponent: (widgetType: WIDGET_TYPE, id: string) => JSX.Element = (widgetType: WIDGET_TYPE, id: string) => {
    if (widgetType === WIDGET_TYPE.BASIC_DISPLAY) {
        return <BasicDisplay selected={false} config={BasicDisplay.defaultConfig} />
    }
    else {
        return <BasicDisplay selected={false} config={BasicDisplay.defaultConfig} />
    }
};