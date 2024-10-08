import { useDrag } from "react-dnd";
import { WIDGET_TYPE } from "./widgetManifest";
import { WidgetPreset } from "./types";

interface WidgetSpawnerProps {
    widgetPreset: WidgetPreset;
    handleWidgetSpawn: (widgetPreset: WidgetPreset) => void;
    children: React.ReactNode;
}

const WidgetSpawner: React.FC<WidgetSpawnerProps> = ({ widgetPreset, handleWidgetSpawn, children }) => {
    return (
        <div
            className="widget-spawner"
            draggable={true}
            onDragStart={() => handleWidgetSpawn(widgetPreset)}
        >
            {children}
        </div>
    );
};

export default WidgetSpawner;
