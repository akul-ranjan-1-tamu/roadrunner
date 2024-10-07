import { useEffect, useState } from "react";
import NavBar from "./navbar/NavBar";
import "./styles.css";
import Grid from "../grid/Grid";
import Menu from "./menu/Menu";
import { MENU_STATE } from "./menu/types";
import { Widget } from "../widgets/types";
import { WIDGET_TYPE } from "../widgets/widgetManifest";
import EmptyWidget from "../widgets/empty-widget/EmptyWidget";

const ANIMATION_DURATION = 300;

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
    const [inMenu, setInMenu] = useState<boolean>(false);
    const [menuState, setMenuState] = useState<MENU_STATE>(MENU_STATE.DEFAULT);
    const [widgets, setWidgets] = useState<Widget[]>([]);

    //necassary so menu doesn't reset before closing animation
    useEffect(() => {
        if (!inMenu) {
            const timeout = setTimeout(() => {
                setMenuState(MENU_STATE.DEFAULT);
            }, ANIMATION_DURATION);
            
            return () => clearTimeout(timeout); 
        }
    }, [inMenu]);

    const handleWidgetSpawn = (widgetType: WIDGET_TYPE) => {
        setInMenu(false);

        console.log("handle widget spawner called");

        const newWidget: Widget = {
            i: `${widgetType}-${widgets.length}`,
            x: 0,
            y: Infinity, 
            w: 4,
            h: 2,
            component: <EmptyWidget id={String(widgets.length)} />, 
        };

        setWidgets([...widgets, newWidget]);
    };

    return (
        <div className={"dashboard-container " + (inMenu ? "in-menu" : "")}>
            {
                <Menu state={menuState} setMenuState={setMenuState} handleWidgetSpawn={handleWidgetSpawn}/>
            }
            {
                <div className="dashboard-contents" onClick={() => (inMenu ? setInMenu(false) : null)}>
                    <Grid widgets={widgets}/>
                    <NavBar changeMenuState={() => setInMenu(true)} />
                </div>
            }
        </div>
    );
};

export default Dashboard;