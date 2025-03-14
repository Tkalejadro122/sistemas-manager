import React from 'react'
import { LogOut } from 'lucide-react'
import { Tooltip } from '@heroui/react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../context/SidebarContext'

const Layout = () => {
  return (
    <SidebarProvider>
      <div className='h-screen w-full flex flex-col'>
        <div className='w-full min-h-12 bg-rojo-mate flex items-center justify-end px-4'>
          <p className='text-blanco'>Kevin Tarazona</p>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            alt='perfil profile'
            className='h-[35px] mx-6 rounded-full'
          />
          <a href='/'>
            <Tooltip
              content='Cerrar sesión'
              closeDelay={0}
              classNames={{
                content: 'bg-gris-claro'
              }}
            >
              <LogOut className='text-blanco' />
            </Tooltip>
          </a>
        </div>
        <div className='w-full h-full flex flex-row'>
          <Sidebar />
          <div className='flex-1 p-6'>
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout
