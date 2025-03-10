import React, { useState } from 'react'
import { Menu as LucideMenu, X } from 'lucide-react'
import { BookPlus } from 'lucide-react'
import { PiStudent } from 'react-icons/pi'
import { MdGroups } from 'react-icons/md'
import { PiProjectorScreenChart } from 'react-icons/pi'
import Menu from '../components/sidebar/Menu'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [openMenu, setOpenMenu] = useState(null)
  const [openMenu2, setOpenMenu2] = useState(null)
  const [openMenu3, setOpenMenu3] = useState(null)
  const [openMenu4, setOpenMenu4] = useState(null)

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index)
    setOpenMenu2(null)
    setOpenMenu3(null)
    setOpenMenu4(null)
  }
  const toggleMenu2 = (index) => {
    setOpenMenu2(openMenu2 === index ? null : index)
    setOpenMenu(null)
    setOpenMenu3(null)
    setOpenMenu4(null)
  }
  const toggleMenu3 = (index) => {
    setOpenMenu3(openMenu3 === index ? null : index)
    setOpenMenu(null)
    setOpenMenu2(null)
    setOpenMenu4(null)
  }
  const toggleMenu4 = (index) => {
    setOpenMenu4(openMenu4 === index ? null : index)
    setOpenMenu(null)
    setOpenMenu2(null)
    setOpenMenu3(null)
  }

  return (
    <div
      className={`bg-rojo-claro h-full transition-all duration-300 min-w-0 overflow-hidden ${
        isOpen ? 'w-60 px-4' : 'w-0'
      }`}
    >
      <button
        className={`absolute top-1 ${isOpen ? 'left-4' : 'left-2'} p-2 bg-rojo-mate text-white rounded-md`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <LucideMenu size={20} />}
      </button>

      {/* Ocultar el menú cuando el sidebar está cerrado */}
      {isOpen && (
        <nav className='mt-16 space-y-2'>
          {/*Primer menú*/}
          <Menu
            nombre='Matrícula'
            funcion={() => toggleMenu(1)}
            icono={<BookPlus className='text-[25px]' />}
            opciones={[
              { label: 'Cancelación', href: '#' },
              { label: 'Aplazamiento', href: '#' },
              { label: 'Reintegro', href: '#' },
              { label: 'Contraprestaciones', href: '#' }
            ]}
            openMenu={openMenu === 1}
          ></Menu>
          {/*Segundo menú*/}
          <Menu
            nombre='Usuarios'
            funcion={() => toggleMenu2(1)}
            icono={<PiStudent className='text-[25px]' />}
            opciones={[
              { label: 'Profesores', href: '#' },
              { label: 'Estudiantes', href: '#' }
            ]}
            openMenu={openMenu2 === 1}
          ></Menu>
          {/*Tercer menú*/}
          <Menu
            nombre='Grupos'
            funcion={() => toggleMenu3(1)}
            icono={<MdGroups className='text-[25px]' />}
            opciones={[
              {
                label: 'Pregrado',
                subopciones: [{ label: 'Ing. Sistemas', href: '#' }]
              },
              {
                label: 'Posgrado',
                subopciones: [{ label: 'Maestría', href: '#' }]
              }
            ]}
            openMenu={openMenu3 === 1}
          ></Menu>

          {/*Cuarto menú*/}
          <Menu
            nombre='Proyectos'
            funcion={() => toggleMenu4(1)}
            icono={<PiProjectorScreenChart className='text-[25px]' />}
            opciones={[
              { label: 'Opción 1', href: '#' },
              { label: 'Opción 2', href: '#' }
            ]}
            openMenu={openMenu4 === 1}
          ></Menu>
        </nav>
      )}
    </div>
  )
}

export default Sidebar
