import { RESIZE_HANDLES, WidgetConfig } from "../../widgets/types";
import { WIDGET_TYPE } from "../../widgets/types";

export enum MENU_STATE { DEFAULT, GRAPHS, DIALS }
export interface MenuEntry {
    redirect?: {icon: String, label: String, onClickState: MENU_STATE},
    widget?: WidgetConfig;
};
export interface MenuContents {contents: MenuEntry[]};

export const DEFAULT_MENU_CONTENTS: MenuContents = {
    contents: [
        {redirect: {icon: "", label: "graphs", onClickState: MENU_STATE.GRAPHS}},
        {redirect: {icon: "", label: "dials", onClickState: MENU_STATE.DIALS}}, ]
};

export const GRAPHS_CONTENTS: MenuContents = {
    contents: [
        {widget: {type: WIDGET_TYPE.BASIC_DISPLAY, title: "basic_display", h:1, w:1, availableHandles: RESIZE_HANDLES}},
    ]
};

export const DIALS_CONTENTS: MenuContents = {
    contents: [
    ]
};

export const MENU_STATE_MAP: Record<MENU_STATE, MenuContents> = {
    [MENU_STATE.DEFAULT]: DEFAULT_MENU_CONTENTS, 
    [MENU_STATE.DIALS]: DIALS_CONTENTS,
    [MENU_STATE.GRAPHS]: GRAPHS_CONTENTS
};