import GridLayout, { Layout } from "react-grid-layout";
import { useEffect, useRef, useState } from "react";
import { Widget, WidgetConfig } from "../widgets/types";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import { DEBUG } from "../utils/debug";
import { getWidgetComponent } from "../widgets/utils/getWidgetComponent";

interface GridProps {
  widgets: Widget[];
  onLayoutChange: (newWidgetLayout: Widget[]) => void;
  onDrop: (widget: Widget, x: number, y: number) => void;
  setBackgroundBlur: (state: boolean) => void;
  selectedWidget: Widget | null;
  setSelectedWidget: (widget: Widget | null) => void;
}

const Grid: React.FC<GridProps> = ({ widgets, onLayoutChange, onDrop, setBackgroundBlur, selectedWidget, setSelectedWidget}) => {
  const [gridWidth, setGridWidth] = useState<number>(0);
  const [enabled, setEnabled] = useState<boolean>(true);
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

  var layout: Widget[] = widgets;
  if (!enabled) layout = layout.map((w) => {return {...w, isDraggable: false}});

  return (
    <div ref={gridContainerRef} className={"grid-container " + (DEBUG ? "debug " : "")}>
      {gridWidth > 0 && (
        <GridLayout
          className="layout"
          layout={layout}
          cols={16}
          rowHeight={gridWidth / 16 - 10}
          width={gridWidth} 
          isDraggable={enabled}
          isResizable={enabled}
          isDroppable={enabled}
          compactType={null}
          isBounded={true}
          onLayoutChange={handleLayoutChange}
          onDrag={() => setBackgroundBlur(true)}
          onDragStop={() => {setBackgroundBlur(false); setSelectedWidget(null)}}
          onResizeStart={() => setBackgroundBlur(true)}
          onResizeStop={() => setBackgroundBlur(false)}
          onDrop={(_, widget: Widget) => {setBackgroundBlur(false); handleDrop(widget);}}
          style={{ width: "100%", height: "100%" }}
        >
          {widgets.map((widget) => (
            <div key={widget.i} onClick={() => {setSelectedWidget(widget); setBackgroundBlur(false)}}>
              {getWidgetComponent(widget.config, widget.i, widget.i === selectedWidget?.i, setEnabled)}
            </div>
          ))}
        </GridLayout>
      )}
    </div>
  );
};

export default Grid;
