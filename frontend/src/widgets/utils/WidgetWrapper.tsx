import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { FormProps, WidgetConfig } from "../types";
import { useWidgets } from "../hooks/WidgetContext";

interface WidgetWrapperProps<T extends WidgetConfig> {
    selected: boolean;
    i : string;
    config: T;
    Form: React.FC<FormProps<T>>;
    setGridEnabled: (enabled: boolean) => void;
    deleteWidget: () => void;
    children?: React.ReactNode;
}

const WidgetWrapper = <ConfigType extends WidgetConfig>({
    selected,
    i,
    config,
    Form,
    setGridEnabled, 
    deleteWidget,
    children
}: WidgetWrapperProps<ConfigType>) => {
    const [formActive, setFormActive] = useState<boolean>(false);

    useEffect(() => {
        if (!formActive) setGridEnabled(true);
    }, [formActive])

    const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setGridEnabled(false);
        setFormActive(true);
    };

    const {setWidgets, widgets} = useWidgets();

    const renderModalWithOverlay = () => (
        <>
            <div className="fullscreen-overlay"></div>
            <div className="modal-content">
                <button className="close-button" onClick={() => setFormActive(false)}>Close</button>
                <Form config={config} i={i} />
            </div>
        </>
    );

    return (
        <div className="widget-wrapper-container">
            {selected && (
                <>
                    <button onClick={handleEditButtonClick} >edit!</button>
                </>
            )}
            {children}
            {/* Render modal with overlay if form is active */}
            {formActive && ReactDOM.createPortal(renderModalWithOverlay(), document.body)}
        </div>
    );
};

export default WidgetWrapper;
