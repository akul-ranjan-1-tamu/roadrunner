import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import "./styles.css";
import { FormProps, WidgetConfig } from "../types";

interface WidgetWrapperProps<T extends WidgetConfig> {
    selected: boolean;
    config: T;
    setConfig: React.Dispatch<React.SetStateAction<T>>;
    Form: React.FC<FormProps<T>>;
    children?: React.ReactNode;
}

const WidgetWrapper = <ConfigType extends WidgetConfig>({
    selected,
    config,
    setConfig,
    Form,
    children
}: WidgetWrapperProps<ConfigType>) => {

    const [formActive, setFormActive] = useState<boolean>(false);

    const renderModal = () => {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={() => setFormActive(false)}>Close</button>
                    <Form config={config} setConfig={setConfig} />
                </div>
            </div>
        );
    };

    return (
        <div className={"widget-wrapper-container"}>
            {selected && (
                <div>
                    <button onClick={() => setFormActive(true)}>edit!</button>
                </div>
            )}
            {children}

            {formActive && ReactDOM.createPortal(renderModal(), document.body)}
        </div>
    );
};

export default WidgetWrapper;
