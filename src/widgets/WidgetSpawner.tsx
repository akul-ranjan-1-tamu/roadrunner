import { useDrag } from "react-dnd";
import { WIDGET_TYPE } from "./widgetManifest";
import { WidgetPreset } from "./types";
import { useState } from "react";

interface WidgetSpawnerProps {
    widgetPreset: WidgetPreset;
    handleWidgetSpawn: (widgetPreset: WidgetPreset) => void;
    children: React.ReactNode;
}

const WidgetSpawner: React.FC<WidgetSpawnerProps> = ({ widgetPreset, handleWidgetSpawn, children }) => {
    //hide children while dragging
    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    return (
        <div
            className="widget-spawner"
            draggable={true}
            onDragStart={() => {
                setIsDragging(true)
                handleWidgetSpawn(widgetPreset)}}
            onDragEnd={() => setIsDragging(false)}
        >
            {!isDragging && children}
        </div>
    );
};

export default WidgetSpawner;
