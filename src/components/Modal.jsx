import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

export const Modal = ({ children, ref, buttonLabel }) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md">
            {children}
            <form method="dialog">
                <button>
                    {buttonLabel}
                </button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
}