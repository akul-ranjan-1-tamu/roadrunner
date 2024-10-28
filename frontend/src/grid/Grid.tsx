import GridLayout, { Layout } from "react-grid-layout";
import { useEffect, useRef, useState } from "react";
import { Widget, WidgetConfig } from "../widgets/types";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import { DEBUG } from "../utils/debug";

interface GridProps {
  widgets: Widget[];
  onLayoutChange: (newWidgetLayout: Widget[]) => void;
  onDrop: (widget: Widget, x: number, y: number) => void;
  setBackgroundBlur: (state: boolean) => void;
}

const Grid: React.FC<GridProps> = ({ widgets, onLayoutChange, onDrop, setBackgroundBlur }) => {
  const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);
  const [gridWidth, setGridWidth] = useState<number>(0);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  //updates grid width based on container
  useEffect(() => {
    if (gridContainerRef.current) {
      const updateGridWidth = () => {
        if (gridContainerRef.current) {
          setGridWidth(gridContainerRef.current.offsetWidth);
        }
      };
      updateGridWidth();
      const resizeObserver = new ResizeObserver(() => {
        updateGridWidth();
      });

      resizeObserver.observe(gridContainerRef.current);
      return () => {
        if (gridContainerRef.current) {
          resizeObserver.unobserve(gridContainerRef.current);
        }
      };
    }
  }, []);

  const handleLayoutChange = (newLayout: Layout[]) => {
    const updatedWidgets = widgets.map(widget => {
      const layoutItem = newLayout.find(item => item.i === widget.i);
      return layoutItem
        ? { ...widget, x: layoutItem.x, y: layoutItem.y, w: layoutItem.w, h: layoutItem.h }
        : widget;
    });

    onLayoutChange(updatedWidgets);
  };

  const handleDrop = (widget: Widget) => {
    const droppedWidget = {
      ...widget,
      w: widget.w,
      h: widget.h,
    };

    onDrop(droppedWidget, widget.x, widget.y);
  };

  return (
    <div ref={gridContainerRef} className={"grid-container " + (DEBUG ? "debug " : "")}>
      {gridWidth > 0 && (
        <GridLayout
          className="layout"
          layout={widgets}
          cols={16}
          rowHeight={gridWidth / 16 - 10}
          width={gridWidth} 
          isDraggable={true}
          isResizable={true}
          isDroppable={true}
          compactType={null}
          isBounded={true}
          onLayoutChange={handleLayoutChange}
          onDragStart={() => setBackgroundBlur(true)}
          onDragStop={() => setBackgroundBlur(false)}
          onResizeStart={() => setBackgroundBlur(true)}
          onResizeStop={() => setBackgroundBlur(false)}
          onDrop={(_, widget: Widget) => {setBackgroundBlur(false); handleDrop(widget);}}
          style={{ width: "100%", height: "100%" }}
        >
          {widgets.map((widget) => (
            <div key={widget.i} onClick={() => setSelectedWidget(widget)}>
              {widget.component}
            </div>
          ))}
        </GridLayout>
      )}
    </div>
  );
};

export default Grid;
