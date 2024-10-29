import { useEffect, useRef, useState } from "react";
import NavBar from "./navbar/NavBar";
import "./styles.css";
import Grid from "../grid/Grid";
import Menu from "./menu/Menu";
import { MENU_STATE } from "./menu/types";
import { Widget, WidgetConfig } from "../widgets/types";
import BasicDisplay from "../widgets/basic-display/BasicDisplay";
import { useWidgets } from "../widgets/hooks/WidgetContext";

const ANIMATION_DURATION = 300;

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [inMenu, setInMenu] = useState<boolean>(false);
  const [backgroundBlur, setBackgroundBlur] = useState<boolean>(false);

  const [menuState, setMenuState] = useState<MENU_STATE>(MENU_STATE.DEFAULT);

  const {widgets, setWidgets} = useWidgets();
  const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);
  const [incomingWidget, setIncomingWidget] = useState<WidgetConfig | null>(null);
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

  const handleWidgetSpawn = (widgetPreset: WidgetConfig) => {
    setInMenu(false);
    setIncomingWidget(widgetPreset);
    console.log(widgetPreset);
  };

  const handleDropWidget = (newWidget: Widget, x: number, y: number) => {
    const updatedWidget: Widget = {
      ...newWidget,
      x,
      y,
      i: `widget-${widgetID.current}`,
      isBounded: true,
      resizeHandles: [],
      config: incomingWidget || BasicDisplay.defaultConfig
    };
    widgetID.current += 1;
    setWidgets([...widgets, updatedWidget]);
  };

  const handleLayoutChange = (newWidgetLayout: Widget[]) => {
    setWidgets(newWidgetLayout);
  }

  const handleSelectedWidgetChange = (newSelectedWidget: Widget | null ): void => {

    if (newSelectedWidget !== null) {

      const updatedWidget: Widget = {
        ...newSelectedWidget,
        resizeHandles: newSelectedWidget.config.availableHandles,
        isResizable: true
      }
  
      const temp = widgets.map((w) => {
        if (w === newSelectedWidget) return updatedWidget;
        else return {...w, resizeHandles: [], isResizable: false}
      });
  
      setWidgets(temp);

    } else {
      const temp = widgets.map((w) => {
        return {...w, resizeHandles: [], isResizable: false}
      });
  
      setWidgets(temp);
    }

    setSelectedWidget(newSelectedWidget); 
  };

  console.log(selectedWidget);

  return (
    <div className={"dashboard-container " + (inMenu ? "in-menu " : "") + (backgroundBlur ? "background-blur" : "")}>
        {
            <Menu state={menuState} setMenuState={setMenuState} handleWidgetSpawn={handleWidgetSpawn} />
        }
      <div className="dashboard-contents" onClick={() => (inMenu ? setInMenu(false) : null)}>
        <Grid widgets={widgets} onLayoutChange={handleLayoutChange} onDrop={handleDropWidget} setBackgroundBlur={setBackgroundBlur} selectedWidget={selectedWidget} setSelectedWidget={handleSelectedWidgetChange}/>
        <NavBar changeMenuState={() => setInMenu(true)} emptyLayout={() => setWidgets([])}/>
      </div>
    </div>
  );
};

export default Dashboard;
