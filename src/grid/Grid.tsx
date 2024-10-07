import { useState } from "react";
import { DEBUG } from "../utils/debug";
import "./styles.css";
import { Widget } from "../widgets/types";
import { WIDGET_TYPE } from "../widgets/widgetManifest";
import EmptyWidget from "../widgets/empty-widget/EmptyWidget";
import GridLayout, { Layout } from "react-grid-layout";

interface GridProps {
    widgets: Widget[]; 
};

const Grid: React.FC<GridProps> = ({widgets}) => {

    return (
        <div className={"grid-container " + (DEBUG ? "debug" : "")}>
            <GridLayout
                className="layout"
                layout={widgets}
                cols={12}
                rowHeight={30}
                width={1200}
                isDraggable={true}  
                isResizable={true}    
            >
                {widgets.map((widget) => (
                    <div key={widget.i} data-grid={widget}>
                        {widget.component}
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default Grid;
