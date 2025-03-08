import { useNavigate } from 'react-router-dom'
import React from 'react'
import Boton from '../components/Boton'
import { User } from 'lucide-react'

const Index = () => {
  const navigate = useNavigate()

  const handleClick = (ruta) => {
    navigate(`/${ruta}`)
  }
  return (
    <div className='flex flex-col w-full h-screen items-center p-4'>
      <h1>Prueba de componentes</h1>
      <div className='flex flex-row w-full min-h-[50%]'>
        <div className='flex flex-col w-1/2'>
          <div className='flex flex-col items-center'>
            <h2>Botones</h2>
            <Boton isIconOnly onClick={() => handleClick('botones')}>
              <User />
            </Boton>
          </div>
        </div>
        <div className='flex flex-col w-1/2'></div>
      </div>
    </div>
  )
}

export default Index
