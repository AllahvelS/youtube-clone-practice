import React from 'react';
import "./ModalWindow.css";

export const ModalWindow = ({ onClose }) => {
    return (
        <div className="modal-window">
            <div className="modal-box">
                <h3>400 error</h3>
                <button className="close-button" onClick={onClose}>❌</button>
            </div>
        </div>
    );
};

export default ModalWindow;

