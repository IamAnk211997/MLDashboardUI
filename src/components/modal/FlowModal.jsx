import { Modal } from 'flowbite-react'
import React from 'react'

const FlowModal = ({openModal,setOpenModal,modalSize,bodyItem,HeaderName}) => {
  return (
    <Modal show={openModal} size={modalSize} onClose={() => setOpenModal()}>
        <Modal.Header>{HeaderName}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            {bodyItem}
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default FlowModal