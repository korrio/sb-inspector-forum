import React from "react";
import { Portal } from "@reach/portal";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

const DialogBase = ({
  showDialog, dialogTitle, onClose, children, dialogSize, dialogTitleCenter
}) => {
  return (
    showDialog && (
      <Portal>
        <DialogOverlay
          className="modal fade show"
          onDismiss={onClose}
        >
          <DialogContent
            className={`modal-dialog modal-dialog-centered ${dialogSize}`}
            aria-label="dialog"
          >
            <div className="modal-content">
              <div className={`modal-header ${dialogTitleCenter ? 'justify-content-center' : ''}`}>
                <h5
                  className="modal-title"
                  id="exampleModalLabel">
                  {dialogTitle}
                </h5>
                <button
                  type="button"
                  className="btn-close-modal"
                  onClick={onClose}>
                    X
                </button>
              </div>
                {children}
            </div>
          </DialogContent>
        </DialogOverlay>
      </Portal>
    )
  );
}

export default DialogBase;
