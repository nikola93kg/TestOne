import React, { useState } from 'react'
import Modal from './Modal'
import './SingleView.css'

function SingleView({ img, fileName, handleClick }) {

    const [modalShow, setModalShow] = useState(false)

    return (
        <div className='list' onClick={() => setModalShow(!modalShow)}>
            <div className="list-view" onClick={handleClick}>
                <img src={img} alt={fileName} />
                <p>{fileName}</p>
            </div>
            <Modal
                image={img}
                shown={modalShow}
                close={() => setModalShow(false)}
            />
        </div>

    )
}

export default SingleView