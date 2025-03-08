import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@heroui/react'
import Boton from './Boton'
import React from 'react'

const { isOpen, onOpen, onOpenChange } = useDisclosure()

const ModalP = () => {
  return (
    <>
      <Boton onClick={onOpen}>Abrir modal</Boton>
    </>
  )
}
export default ModalP
