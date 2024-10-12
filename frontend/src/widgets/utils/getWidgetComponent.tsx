import BasicDisplay from "../basic-display/BasicDisplay";
import EmptyWidget from "../empty-widget/EmptyWidget";
import { WIDGET_TYPE } from "../manifest";

export const getWidgetComponent: (widgetType: WIDGET_TYPE, id: string) => JSX.Element = (widgetType: WIDGET_TYPE, id: string) => {
    if (widgetType === WIDGET_TYPE.EMPTY) {
        return <EmptyWidget id={id} />
    } else if (widgetType === WIDGET_TYPE.BASIC_DISPLAY) {
        return <BasicDisplay id={id} />
    }
    else {
        return <EmptyWidget id={id} />
    }
};