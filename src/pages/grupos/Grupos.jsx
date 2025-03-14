import React from 'react'
import Tabla from '../../components/Tabla'
import { Eye, CircleFadingPlus, NotebookPen } from 'lucide-react'
import Boton from '../../components/Boton'
import { useState, useEffect } from 'react'
import Modal from '../../components/Modal'
import { addToast, ToastProvider } from '@heroui/react'
import { useNavigate } from 'react-router-dom'

const Grupos = () => {
  const columnas = ['id', 'Nombre', 'Docente', '# Estudiantes', 'Opciones']
  const [grupos, setGrupos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const Navigate = useNavigate()

  useEffect(() => {
    fetch('/grupos.json')
      .then((response) => response.json())
      .then((data) => {
        setGrupos(data)
      })
  }, [])

  const verGrupo = (grupo) => {
    localStorage.setItem('grupo', JSON.stringify(grupo))
    Navigate('/grupo')
  }

  const crearGrupo = (grupo) => {
    console.log('Crear/actualizar grupo:', grupo)
  }

  const verNotas = (grupo) => {
    console.log('Ver notas del grupo:', grupo)
  }

  const acciones = [
    {
      icono: <Eye className='text-[25px]' />,
      tooltip: 'Ver',
      accion: verGrupo
    },
    {
      icono: <CircleFadingPlus className='text-[25px]' />,
      tooltip: 'Crear/actualizar grupo',
      accion: crearGrupo
    },
    {
      icono: <NotebookPen className='text-[25px]' />,
      tooltip: 'Ver notas',
      accion: verNotas
    }
  ]

  const mostrarNotificacion = () => {
    addToast({
      title: 'Grupos actualizados',
      description: 'Los grupos han sido actualizados correctamente',
      color: 'success',
      timeout: '3000',
      shouldShowTimeoutProgress: true
    })
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <ToastProvider
        placement='top-right'
        toastOffset={60}
        maxVisibleToasts={1}
      />
      <p className='text-titulos my-4'>Lista de grupos</p>
      <div className='w-full my-4'>
        <Tabla
          informacion={grupos}
          itemsPorPagina={10}
          columnas={columnas}
          acciones={acciones}
        />
      </div>
      <div className='w-full flex justify-end mt-4'>
        <Boton
          onClick={() => {
            setIsOpen(true)
          }}
        >
          Crear grupos
        </Boton>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        cabecera='Crear Grupos'
        cuerpo={<p>¿Estás seguro de crear/actualizar todos los grupos?</p>}
        footer={
          <Boton
            onClick={() => {
              mostrarNotificacion()
              setIsOpen(false)
            }}
          >
            Aceptar
          </Boton>
        }
      />
    </div>
  )
}
export default Grupos
