import { useState } from 'react';
import './ExpandablePanel.css';

function ExpandablePanel({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="expandable-panel">
            <button
                className={`panel-header ${isOpen ? 'open' : ''}`}
                onClick={togglePanel}
            >
                <h3 className="panel-title">{title}</h3>
                <span className="panel-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={`panel-content ${isOpen ? 'open' : ''}`}>
                <div className="panel-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ExpandablePanel;
