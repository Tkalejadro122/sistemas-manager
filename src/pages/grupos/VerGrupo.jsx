import React from 'react'
import Tabla from '../../components/Tabla'
import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

const VerGrupo = () => {
  const [grupo, setGrupo] = useState(null)
  const [listaEstudiantes, setListaEstudiantes] = useState([])

  useEffect(() => {
    setGrupo(JSON.parse(localStorage.getItem('grupo')))
    fetch('/estudiantes.json')
      .then((response) => response.json())
      .then((data) => {
        const estudiantes = data.map((estudiante) => ({
          ...estudiante,
          Nombre: `${estudiante.primer_nombre} ${estudiante.segundo_nombre} ${estudiante.primer_apellido} ${estudiante.segundo_apellido}`
        }))
        setListaEstudiantes(estudiantes)
      })
  }, [])

  const verEstudiante = (estudiante) => {
    localStorage.setItem('estudiante', JSON.stringify(estudiante))
  }

  const columnas = ['Código', 'Nombre', 'Correo electrónico', 'opciones']

  const acciones = [
    {
      icono: <Eye className='text-[25px]' />,
      tooltip: 'Ver',
      accion: verEstudiante
    }
  ]

  return (
    <div className='flex flex-col items-center'>
      <p className='text-titulos'>Información del grupo</p>
      <p className='text-subtitulos'>{grupo?.Nombre}</p>
      <div className='flex flex-row w-full my-8'>
        <div className='w-[50%] flex flex-row justify-center space-x-2'>
          <div className='font-semibold'>Nombre del docente:</div>
          <div>{grupo?.Docente}</div>
        </div>
        <div className='w-[50%] flex flex-row justify-center space-x-2'>
          <div className='font-semibold'>Número de estudiantes:</div>
          <div>{grupo?.['# Estudiantes']}</div>
        </div>
      </div>
      <p className='text-subtitulos mb-8'>Lista de estudiantes</p>
      <Tabla
        informacion={listaEstudiantes}
        columnas={columnas}
        acciones={acciones}
        itemsPorPagina={10}
      />
    </div>
  )
}

export default VerGrupo
