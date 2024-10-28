import BasicDisplay from "./basic-display/BasicDisplay";
import { WidgetType, WIDGET_TYPE } from "./types";

//maps each type to their associated component and properties
export interface WidgetMapEntry {
    component: WidgetType<any, any, any>;
}

export const WIDGET_MAP: Record<WIDGET_TYPE, WidgetMapEntry> = {
    [WIDGET_TYPE.BASIC_DISPLAY]: {
        component: BasicDisplay
    }
};

