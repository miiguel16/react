import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
    return (
        <header className="flex flex-nowrap m-4 p-7">
            <h1 className="grid h-18 grid-cols-2 place-content-around gap-2  text-sky-600 text-4xl font-extrabold">Introduccion a React 2025</h1>
            <Navbar />
        </header>
    )
}