import React from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState(3) // Menú por defecto
  const [selectedOption, setSelectedOption] = useState('Ing. Sistemas') // Opción por defecto

  return (
    <SidebarContext.Provider
      value={{
        selectedMenu,
        setSelectedMenu,
        selectedOption,
        setSelectedOption
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useSidebar = () => {
  return useContext(SidebarContext)
}
