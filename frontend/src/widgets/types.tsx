import { Layout } from "react-grid-layout";

//add new enum with each widget type
export enum WIDGET_TYPE {BASIC_DISPLAY, DIAL};

export type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
export const RESIZE_HANDLES: ResizeHandle[] = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

export interface Widget extends Layout {
    config: WidgetConfig;
}

export interface WidgetConfig {
    //title which shows up in menu
    title: string;
    //defines widget contents
    type: WIDGET_TYPE;
    //appear when resizing widget
    availableHandles: ResizeHandle[];
    //starting dimensions
    h: number;
    w: number;
    //max dimensions
    maxH?: number;
    maxW?: number;
}

export interface WidgetProps {
    selected: boolean;
    config: WidgetConfig;
};

export interface FormProps<T extends WidgetConfig> {
    config: T;
    setConfig: (newConfig: T) => void;
};

export interface WidgetType<WidgetProps, FormProps, ConfigType> extends React.FC<WidgetProps> {
    form: React.FC<FormProps>;
    defaultConfig: ConfigType;
}