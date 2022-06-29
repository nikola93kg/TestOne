import React, { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

import './SingleView.css'

function SingleView({ img, fileName, handleClick, select, handleImg }) {

    const [showModal, setShowModal] = useState(false)

    const handleBonus = () => {
        setShowModal(true)
    }


    //mozda na ovaj img da uradis onClick handler

    return (
        <div onClick={handleBonus}>
            <div className="list-view" onClick={handleClick}>
                <img src={img} alt={fileName} />
                <p>{fileName}</p>
            </div>
            {showModal && <Modal image={img} />}
            {showModal && <Backdrop />}
        </div>

    )
}

export default SingleView


{/* <div className="list-view" onClick={(e) => handleClick(e.target)}> */ }
