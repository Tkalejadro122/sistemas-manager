import React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Menu = ({
  nombre,
  funcion,
  icono,
  opciones,
  openMenu,
  selectedOption,
  handleOptionClick
}) => {
  return (
    <div>
      <button
        className={`flex items-center justify-between h-8 w-full p-3 ${
          openMenu ? 'text-white bg-rojo-mate' : 'text-black'
        } rounded-md transition-colors duration-300 ease-in-out`}
        onClick={funcion}
      >
        {icono}
        <p>{nombre}</p>
        <motion.span
          animate={{ rotate: openMenu ? 90 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronRight size={18} />
        </motion.span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: openMenu ? 'auto' : 0,
          opacity: openMenu ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='overflow-hidden bg-rojo-claro'
      >
        {opciones.map((opcion, index) =>
          opcion.subopciones ? (
            <div key={index} className='pl-6'>
              <p className='text-negro-institucional'>{opcion.label}</p>
              {opcion.subopciones.map((sub, subIndex) => (
                <a
                  key={subIndex}
                  href={sub.href}
                  onClick={() => handleOptionClick(sub.label)}
                  className={`block pt-1 pl-4 text-negro-institucional rounded-md transition-colors duration-300 ease-in-out ${
                    selectedOption === sub.label
                      ? 'text-rojo-institucional bg-rojo-institucional bg-opacity-20'
                      : 'hover:text-rojo-institucional hover:bg-rojo-institucional hover:bg-opacity-10'
                  }`}
                >
                  {'· ' + sub.label}
                </a>
              ))}
            </div>
          ) : (
            <a
              key={index}
              href={opcion.href}
              onClick={() => handleOptionClick(opcion.label)}
              className={`block pt-1 pl-6 text-negro-institucional rounded-md transition-colors duration-300 ease-in-out ${
                selectedOption === opcion.label
                  ? 'text-rojo-institucional bg-rojo-institucional font-semibold bg-opacity-20'
                  : 'hover:text-rojo-institucional hover:bg-rojo-institucional hover:bg-opacity-10'
              }`}
            >
              {opcion.label}
            </a>
          )
        )}
      </motion.div>
    </div>
  )
}

Menu.propTypes = {
  nombre: PropTypes.string.isRequired,
  icono: PropTypes.node.isRequired,
  funcion: PropTypes.func.isRequired,
  opciones: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      subopciones: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string
        })
      )
    })
  ),
  openMenu: PropTypes.bool,
  selectedOption: PropTypes.string,
  handleOptionClick: PropTypes.func.isRequired
}

export default Menu
