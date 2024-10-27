import BasicDisplay from "./basic-display/BasicDisplay";
import { ComponentWithForm, WIDGET_TYPE } from "./types";

//maps each type to their associated component and properties
export interface WidgetMapEntry {
    component: ComponentWithForm<any, any, any>;
}

export const WIDGET_MAP: Record<WIDGET_TYPE, WidgetMapEntry> = {
    [WIDGET_TYPE.BASIC_DISPLAY]: {
        component: BasicDisplay
    }
};

