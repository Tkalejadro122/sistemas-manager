import React from 'react'
import Layout from '../layouts/Layout'
import Tabla from '../components/Tabla'
import { Eye, CircleFadingPlus, NotebookPen } from 'lucide-react'

const Grupos = () => {
  const grupos = [
    {
      id: 1,
      Nombre: 'Grupo A',
      Docente: 'Dr. Pérez',
      '# Estudiantes': 25
    },
    {
      id: 2,
      Nombre: 'Grupo B',
      Docente: 'Lic. Ramírez',
      '# Estudiantes': 30
    },
    {
      id: 3,
      Nombre: 'Grupo C',
      Docente: 'Ing. Gutiérrez',
      '# Estudiantes': 20
    },
    {
      id: 4,
      Nombre: 'Grupo D',
      Docente: 'Mtro. López',
      '# Estudiantes': 15
    },
    {
      id: 5,
      Nombre: 'Grupo E',
      Docente: 'Dra. Martínez',
      '# Estudiantes': 28
    },
    {
      id: 6,
      Nombre: 'Grupo F',
      Docente: 'Lic. Herrera',
      '# Estudiantes': 18
    },
    {
      id: 7,
      Nombre: 'Grupo G',
      Docente: 'Ing. Torres',
      '# Estudiantes': 22
    },
    {
      id: 8,
      Nombre: 'Grupo H',
      Docente: 'Mtro. Gómez',
      '# Estudiantes': 27
    },
    {
      id: 9,
      Nombre: 'Grupo I',
      Docente: 'Dra. Salazar',
      '# Estudiantes': 19
    },
    {
      id: 10,
      Nombre: 'Grupo J',
      Docente: 'Lic. Castro',
      '# Estudiantes': 24
    }
  ]

  const columnas = ['id', 'Nombre', 'Docente', '# Estudiantes', 'Opciones']

  const opciones = [
    <Eye key='eye' />,
    <CircleFadingPlus key='circle' />,
    <NotebookPen key='notebook' />
  ]

  return (
    <Layout>
      <Tabla usuarios={grupos} columnas={columnas} opciones={opciones} />
    </Layout>
  )
}
export default Grupos
