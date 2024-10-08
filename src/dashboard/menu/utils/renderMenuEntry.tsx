import { WidgetPreset } from "../../../widgets/types";
import { WIDGET_TYPE } from "../../../widgets/widgetManifest";
import WidgetSpawner from "../../../widgets/WidgetSpawner";
import { MENU_STATE, MenuEntry } from "../types";

const renderMenuEntry = (entry: MenuEntry, setMenuState: (state: MENU_STATE) => void, handleWidgetSpawn: (widgetPreset: WidgetPreset) => void): JSX.Element => {
    
    if (entry.redirect !== undefined) {
        const redirect = entry.redirect;
        return (
            <div onClick={() => setMenuState(redirect.onClickState)}>
                <p>{redirect.label}</p>
            </div>
        );
    } else if (entry.widget !== undefined) {
        const widgetPreset = entry.widget;
        return (
            <div>
                <WidgetSpawner widgetPreset={widgetPreset} handleWidgetSpawn={handleWidgetSpawn}>
                    widget spawner!
                </WidgetSpawner>
            </div>
        );
    } else {
        return <></>; 
    }
};

export default renderMenuEntry;
