import { useState } from "react";
import { MENU_STATE, MENU_STATE_MAP, MenuContents as MenuContentsType } from "./types";


interface MenuProps {
    state: MENU_STATE;
    setMenuState: (state: MENU_STATE) => void;
}

const Menu: React.FC<MenuProps> = (props) => {

    const menuContents: MenuContentsType = MENU_STATE_MAP[props.state];

    return <div className="menu-container">
        {menuContents.contents.map((entry, index) => (
            <div key={index} onClick={() => props.setMenuState(entry.onClickState)}>
                <p>{entry.label}</p>
            </div>
        ))}
    </div>
}


export default Menu;