import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ children, isOpen, onClickClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button
          type="button"
          className="ui-model__close-button text-danger"
          onClick={onClickClose}
        >
          <strong>x</strong>
        </button>
        { children }
      </div>
    </div>,
    portalRoot,
  );
};

export default Modal;
