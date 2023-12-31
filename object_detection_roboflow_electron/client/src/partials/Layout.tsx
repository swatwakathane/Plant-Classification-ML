import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className='w-full '>
      <section
        className='fixed bg-sky-700 text-xl  sm:text-4xl font-semibold text-white md:hidden z-50 inset-0 grid place-items-center h-screen w-full '
      >
        Please resize screen to 300x300 atlest
      </section>
      <header className='bg-slate-900 z-[5] flex justify-between px-8 py-4 md:py-6 text-xl md:text-2xl w-full shadow-lg'>
        <NavLink
          to={'/'}
          className='text-slate-200 font-semibold'
        >
          Plant Classify
        </NavLink>

        <nav className='space-x-4 text-slate-400'>
          {/* <NavLink
            className='hover:text-sky-200'
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            className='hover:text-sky-200'
            to={'/about'}
          >
            About
          </NavLink>
          */}

          
          <NavLink
            className='hover:text-sky-200'
            to={'/counter'}
          >
            Detection
          </NavLink>

        </nav>

      </header>
      {children}
    </main>
  )
}

export default Layout