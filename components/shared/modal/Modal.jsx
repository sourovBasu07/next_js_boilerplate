"use client";

/**
 * Modal Component
*
* A reusable modal dialog component that can be shown or hidden.
*
* @param {Object} props - The component's props.
* @param {boolean} [props.show=false] - Whether the modal is visible or hidden.
* @param {function} props.onClose - A function to be called when the modal is closed.
* @param {ReactNode} props.children - The content to be displayed within the modal.
*
* @returns {ReactNode} The rendered modal component.
*/
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Cross from '../../../assets/Icons/cancel.svg?react';
import useClickOutside from '../../../utils/hooks/useClickOutside';

const Modal = ({ show = false, onClose, children, title = "", className, callback = () => { } }) => {
    const modalRefs = useRef([]);

    useClickOutside(modalRefs, callback);

    useEffect(() => {
        if (show) {
            document.querySelector("body").style.overflowY = "hidden";
        } else {
            document.querySelector("body").style.overflowY = "auto";
        }

        return () => document.querySelector("body").style.overflowY = "auto";
    }, [show]);

    return ReactDOM.createPortal(
        <div className={`modal fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-[999] bg-[#0000008c] ${show ? "scale-100" : "scale-0"}`}>
            <div className="relative w-full h-full flex justify-center items-center sm:px-5">
                <div className={`${title ? "bg-white" : "bg-backgroundColor"} rounded-none sm:rounded-lg w-full max-w-[42.5rem] mx-auto transition-all duration-500 overflow-hidden ${show ? "translate-y-0 opacity-100" : "translate-y-48 opacity-0"} ${className}`} ref={(ref) => modalRefs.current[0] = ref}>
                    <div className={`absolute w-full h-16 flex justify-between items-center ${title ? "bg-white" : ""} px-[1.875rem] ${title ? "border-b-[0.04rem] border-b-borderColor" : ""} z-30`}>
                        <p className="font-medium text-2xl text-primary2">{title}</p>
                        <div onClick={onClose} className="cursor-pointer font-bold">
                            <Cross className='w-4 h-4 fill-neutral-500' />
                        </div>
                    </div>
                    <div className="w-full h-screen sm:h-max sm:max-h-[90vh] px-5 pt-10 pb-10 overflow-y-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;