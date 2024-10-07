import { useDrag } from "react-dnd";
import { WIDGET_TYPE } from "./widgetManifest";

interface WidgetSpawnerProps {
    widgetType: WIDGET_TYPE;
    handleWidgetSpawn: (widgetType: WIDGET_TYPE) => void;
    children: React.ReactNode;
}

interface DragItem {
    widgetType: WIDGET_TYPE;
}

const WidgetSpawner: React.FC<WidgetSpawnerProps> = ({ widgetType, handleWidgetSpawn, children }) => {
    const [{ isDragging }, drag] = useDrag<DragItem, unknown, { isDragging: boolean }>({
        type: "WIDGET",
        item: () => {
            handleWidgetSpawn(widgetType);
            return { widgetType };
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag}>
            {children}
        </div>
    );
};

export default WidgetSpawner;
