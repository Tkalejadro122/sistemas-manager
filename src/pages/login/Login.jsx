import React from 'react'
import { Form } from '@heroui/form'
import { Input } from '@heroui/react'
import { useState } from 'react'
import { Mail } from 'lucide-react'
import { LockKeyhole } from 'lucide-react'
import { Eye } from 'lucide-react'
import { EyeOff } from 'lucide-react'
import Boton from '../../components/Boton'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const Navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    Navigate('/grupos')
  }

  return (
    <div className='flex items-center justify-center h-screen w-full bg-gris-intermedio'>
      <div className='w-1/2 h-3/5 bg-blanco rounded-[15px] flex flex-col items-center p-8'>
        <p className='text-titulos text-rojo-institucional'>Iniciar sesión</p>
        <Form
          onSubmit={onSubmit}
          className='flex flex-col w-full items-center my-4 space-y-10'
        >
          <Input
            classNames={{
              base: 'w-3/5',
              inputWrapper:
                'border border-gris-institucional rounded-[15px] w-full'
            }}
            isRequired
            label='Correo electrónico'
            labelPlacement='outside'
            name='email'
            type='email'
            value={email}
            onValueChange={setEmail}
            endContent={<Mail />}
          />
          <Input
            classNames={{
              base: 'w-3/5',
              inputWrapper:
                'border border-gris-institucional rounded-[15px] w-full'
            }}
            isRequired
            label='Contraseña'
            labelPlacement='outside'
            name='password'
            value={password}
            onValueChange={setPassword}
            endContent={
              <button
                type='button'
                className='focus:outline-none'
                onClick={() => setVisible(!visible)}
              >
                {password ? visible ? <EyeOff /> : <Eye /> : <LockKeyhole />}
              </button>
            }
            type={visible ? 'text' : 'password'}
          />
          <Boton type='submit' w='60%'>
            Iniciar sesión
          </Boton>
        </Form>
      </div>
    </div>
  )
}

export default Login
