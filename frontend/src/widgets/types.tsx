import { Layout } from "react-grid-layout";

export enum WIDGET_TYPE {BASIC_DISPLAY};

export type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
export const RESIZE_HANDLES: ResizeHandle[] = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

export interface Widget extends Layout {
    component: React.ReactNode;
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

export interface FormProps {
    config: WidgetConfig;
    setConfig: (newConfig: WidgetConfig) => void;
};

export interface ComponentWithForm<WidgetProps, FormProps, ConfigType> extends React.FC<WidgetProps> {
    form: React.FC<FormProps>;
    defaultConfig: ConfigType;
}