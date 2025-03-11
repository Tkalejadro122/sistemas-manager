import React, { useState } from 'react'
import { Menu as LucideMenu, X, BookPlus } from 'lucide-react'
import { PiStudent } from 'react-icons/pi'
import { MdGroups } from 'react-icons/md'
import { PiProjectorScreenChart } from 'react-icons/pi'
import Menu from '../components/sidebar/Menu'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [openMenu, setOpenMenu] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index)
  }

  const handleOptionClick = (label) => {
    setSelectedOption(label)
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

      {isOpen && (
        <nav className='mt-16 space-y-2'>
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
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          <Menu
            nombre='Usuarios'
            funcion={() => toggleMenu(2)}
            icono={<PiStudent className='text-[25px]' />}
            opciones={[
              { label: 'Profesores', href: '#' },
              { label: 'Estudiantes', href: '#' }
            ]}
            openMenu={openMenu === 2}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          <Menu
            nombre='Grupos'
            funcion={() => toggleMenu(3)}
            icono={<MdGroups className='text-[25px]' />}
            opciones={[
              {
                label: 'Pregrado',
                subopciones: [{ label: 'Ing. Sistemas', href: '/grupos' }]
              },
              {
                label: 'Posgrado',
                subopciones: [{ label: 'Maestría', href: '#' }]
              }
            ]}
            openMenu={openMenu === 3}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          <Menu
            nombre='Proyectos'
            funcion={() => toggleMenu(4)}
            icono={<PiProjectorScreenChart className='text-[25px]' />}
            opciones={[
              { label: 'Opción 1', href: '#' },
              { label: 'Opción 2', href: '#' }
            ]}
            openMenu={openMenu === 4}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
        </nav>
      )}
    </div>
  )
}

export default Sidebar
