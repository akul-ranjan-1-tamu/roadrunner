import BasicDisplay from "./basic-display/BasicDisplay";
import EmptyWidget from "./empty-widget/EmptyWidget";
import { ResizeHandle, WidgetProps, RESIZE_HANDLES } from "./types";

export enum WIDGET_TYPE {EMPTY, BASIC_DISPLAY};

export interface WIDGET_PROPERTIES {
    defaultSize: [l: number, h: number];
    availableResizeHandles: ResizeHandle[]
};

//maps each type to their associated component and properties
export interface WidgetMapEntry {
    properties: WIDGET_PROPERTIES;
    component: React.FC<WidgetProps>;
}

export const WIDGET_MAP: Record<WIDGET_TYPE, WidgetMapEntry> = {
    [WIDGET_TYPE.EMPTY]: {
        properties: { defaultSize: [1, 1], availableResizeHandles: RESIZE_HANDLES },
        component: EmptyWidget,
    },
    [WIDGET_TYPE.BASIC_DISPLAY]: {
        properties: {defaultSize: [1, 1], availableResizeHandles: RESIZE_HANDLES},
        component: BasicDisplay
    }
};