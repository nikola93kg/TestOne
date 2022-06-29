import { useEffect } from 'react'
import './Modal.css'

function Modal({ children, shown, close, image }) {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            close()
        }, 1000)
        return () => clearTimeout(timeOut)
    }, [shown])

    return shown ? (
        <div className="modal-backdrop" onClick={() => close()}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={image} alt="avatar picture" />
                {children}
            </div>
        </div>
    ) : null
}

export default Modal