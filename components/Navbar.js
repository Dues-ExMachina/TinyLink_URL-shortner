import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-600/30 backdrop-blur-2xl p-3 flex justify-between items-center '>
            <div className='font-bold text-lg'><Link href="/">TinyLink</Link></div>
            <ul className="flex justify-center items-center gap-4">
                <Link href="/"><li className="li">Home</li ></Link>
                <Link href="/about"><li className="li">About</li ></Link>
                <Link href="/Shorten"><li className="li">Shorten</li ></Link>
                <Link href="/contact"><li className="li">Contact</li ></Link>
                <li className="flex gap-3">
                    <Link href="/Shorten"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now</button></Link>
                    <Link href="/github"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
