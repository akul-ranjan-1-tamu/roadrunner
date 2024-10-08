import { useEffect, useRef, useState } from "react";
import NavBar from "./navbar/NavBar";
import "./styles.css";
import Grid from "../grid/Grid";
import Menu from "./menu/Menu";
import { MENU_STATE } from "./menu/types";
import { Widget, WidgetPreset } from "../widgets/types";
import { Layout } from "react-grid-layout";

const ANIMATION_DURATION = 300;

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [inMenu, setInMenu] = useState<boolean>(false);
  const [menuState, setMenuState] = useState<MENU_STATE>(MENU_STATE.DEFAULT);
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const widgetID = useRef<number>(0);

  // Close the menu after animation, allowing time for state reset
  useEffect(() => {
    if (!inMenu) {
      const timeout = setTimeout(() => {
        setMenuState(MENU_STATE.DEFAULT);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [inMenu]);

  const handleWidgetSpawn = (widgetPreset: WidgetPreset) => {
    setInMenu(false);
  };

  const handleDropWidget = (newWidget: Widget, x: number, y: number) => {
    const updatedWidget: Widget = {
      ...newWidget,
      x,
      y,
      i: `widget-${widgetID.current}`,
      isBounded: true,
    };
    widgetID.current += 1;
    setWidgets([...widgets, updatedWidget]);
  };

  const handleLayoutChange = (newWidgetLayout: Widget[]) => {
    setWidgets(newWidgetLayout);
  };

  return (
    <div className={"dashboard-container " + (inMenu ? "in-menu" : "")}>
      <Menu state={menuState} setMenuState={setMenuState} handleWidgetSpawn={handleWidgetSpawn} />
      <div className="dashboard-contents" onClick={() => (inMenu ? setInMenu(false) : null)}>
        <Grid widgets={widgets} onLayoutChange={handleLayoutChange} onDrop={handleDropWidget} />
        <NavBar changeMenuState={() => setInMenu(true)} />
      </div>
    </div>
  );
};

export default Dashboard;
