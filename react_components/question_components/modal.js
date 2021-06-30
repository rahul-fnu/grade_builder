import React, { useRef, useCallback, useEffect } from "react";
import ReactModal from "react-modal";

export default function Modal ({isOpen, setIsOpen, content}) {
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setIsOpen(false);
        }
    };
    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
          }
        },
        [setShowModal, showModal]
    );
    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    return(
        <>
            {isOpen ? (
                <ReactModal>
                    <div>
                        {}
                    </div>
                </ReactModal>
            ):null}
        </>
    )

}