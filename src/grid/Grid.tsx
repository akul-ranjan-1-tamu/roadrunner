import GridLayout, { Layout } from "react-grid-layout";
import { useEffect, useRef, useState } from "react";
import { RESIZE_HANDLES, Widget } from "../widgets/types";
import "react-grid-layout/css/styles.css";
import "./styles.css";
import { DEBUG } from "../utils/debug";
import EmptyWidget from "../widgets/empty-widget/EmptyWidget";

interface GridProps {
  widgets: Widget[];
  onLayoutChange: (newWidgetLayout: Widget[]) => void;
  onDrop: (widget: Widget, x: number, y: number) => void;
}

const Grid: React.FC<GridProps> = ({ widgets, onLayoutChange, onDrop }) => {
  const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);

  const handleLayoutChange = (newLayout: Layout[]) => {
    const updatedWidgets = widgets.map(widget => {
      const layoutItem = newLayout.find(item => item.i === widget.i);
      return layoutItem
        ? { ...widget, x: layoutItem.x, y: layoutItem.y, w: layoutItem.w, h: layoutItem.h }
        : widget;
    });

    onLayoutChange(updatedWidgets);
  };

  const handleDrop = (_: Widget[], widget: Widget) => {
    const droppedWidget = {
      ...widget,
      w: widget.w,
      h: widget.h,
      component: <EmptyWidget id={widget.i}/>,  
      
    };

    onDrop(droppedWidget, widget.x, widget.y);
  };

  return (
    <div className={"grid-container "  + (DEBUG ? "debug" : "")}>
      <GridLayout
        className="layout"
        layout={widgets}
        cols={12}
        rowHeight={30}
        width={1200}
        isDraggable={true}
        isResizable={true}
        isDroppable={true}
        compactType={null}
        isBounded={true}
        onLayoutChange={handleLayoutChange}
        onDrop={handleDrop}
        style={{width: "100%", height: "100%"}}
      >
        {widgets.map((widget) => (
          <div key={widget.i}>
            {widget.component}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Grid;
