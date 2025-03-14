import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal as ModalComponent,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@heroui/react'

const Modal = ({ isOpen, onOpenChange, cabecera, cuerpo, footer }) => {
  return (
    <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              {cabecera}
            </ModalHeader>
            <ModalBody>{cuerpo}</ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Cancelar
              </Button>
              {footer}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalComponent>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  cabecera: PropTypes.string,
  cuerpo: PropTypes.node,
  footer: PropTypes.node
}

export default Modal
