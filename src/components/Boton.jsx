import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@heroui/react'

const Boton = ({
  variant, //Define el tipo de botón
  children, //El contenido dentro del botón, puede ser sólo texto o un nodo de React.
  w, //ancho del botón
  h, //altura del botón
  success, //Define si el botón es de éxito (se recomienda usar solo el nombre de la variable en caso de que sea exitoso, si no quiere que sea exitoso no es necesario declarar la variable)
  startContent, //Contenido al inicio del botón, recomendable si se va a usar un icono junto al texto del botón
  endContent, //Contenido al final del botón, recomendable si se va a usar un icono junto al texto del botón
  disabled, //Define si el botón está deshabilitado (Sólo declarar si lo quiere deshabilitar, si no no es necesario declarar la variable)
  isIconOnly, //define si el botón es sólo un icono (sólo declarar si es un icono, si no no es necesario declarar la variable)
  onClick, //Función que se ejecuta al hacer click en el botón
  type //Tipo de botón
}) => {
  const classNameBoton = () => {
    if (variant) {
      if (variant == 'bordered') {
        return `${success ? 'border-success text-success data-[hover=true]:hover:bg-success-dark data-[hover=true]:hover:bg-opacity-20' : 'border-rojo-institucional text-rojo-institucional data-[hover=true]:hover:bg-rojo-institucional data-[hover=true]:hover:bg-opacity-20'}`
      } else
        return `${success ? 'text-success data-[hover=true]:hover:bg-success-dark data-[hover=true]:hover:bg-opacity-30 ' : 'text-rojo-institucional data-[hover=true]:hover:bg-rojo-institucional data-[hover=true]:hover:bg-opacity-30'}`
    } else {
      return `${success ? 'bg-success data-[hover=true]:hover:bg-success-dark' : 'bg-rojo-institucional data-[hover=true]:hover:bg-[#840705] '} text-white`
    }
  }

  return (
    <Button
      isDisabled={disabled}
      startContent={startContent}
      endContent={endContent}
      className={classNameBoton() + ' min-w-1'}
      variant={variant}
      isIconOnly={isIconOnly}
      onPress={onClick}
      type={type}
      style={{
        width: w || undefined,
        height: h || undefined
      }}
    >
      {children}
    </Button>
  )
}

// Validación de props con PropTypes
Boton.propTypes = {
  children: PropTypes.node,
  h: PropTypes.string,
  w: PropTypes.string,
  success: PropTypes.bool,
  startContent: PropTypes.node,
  endContent: PropTypes.node,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['bordered', 'light']),
  isIconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Boton
