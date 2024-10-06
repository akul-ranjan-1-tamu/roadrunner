export enum MENU_STATE { DEFAULT, GRAPHS, DIALS }
export interface MenuEntry {icon: String, label: String, onClickState: MENU_STATE};
export interface MenuContents {contents: MenuEntry[]};

export const DEFAULT_MENU_CONTENTS: MenuContents = {
    contents: [
        {icon: "", label: "graphs", onClickState: MENU_STATE.GRAPHS},
        {icon: "", label: "dials", onClickState: MENU_STATE.DIALS}, ]
};

export const GRAPHS_CONTENTS: MenuContents = {
    contents: [

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