import { useEffect, useState } from "react";
import NavBar from "./navbar/NavBar";
import "./styles.css";
import Grid from "../grid/Grid";
import Menu from "./menu/Menu";
import { MENU_STATE } from "./menu/types";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
    const [inMenu, setInMenu] = useState<boolean>(false);
    const [menuState, setMenuState] = useState<MENU_STATE>(MENU_STATE.DEFAULT);

    const ANIMATION_DURATION = 300;

    function changeMenuState() {
        setInMenu(!inMenu);
    }

    useEffect(() => {
        if (!inMenu) {
            const timeout = setTimeout(() => {
                setMenuState(MENU_STATE.DEFAULT);
            }, ANIMATION_DURATION);
            
            return () => clearTimeout(timeout); 
        }
    }, [inMenu]);

    return (
        <div className={"dashboard-container " + (inMenu ? "in-menu" : "")}>
            {
                <Menu state={menuState} setMenuState={setMenuState} />
            }
            <div className="dashboard-contents" onClick={() => (inMenu ? setInMenu(false) : null)}>
                <Grid />
                <NavBar changeMenuState={changeMenuState} />
            </div>
        </div>
    );
};

export default Dashboard;