'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setShowHeader(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!showHeader) return null // hide header until scroll

    return (
        <header className="w-full bg-transparent fixed top-0 z-50 transition-opacity duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <img
                        src="/logo-horizontal.png"
                        alt="Golden Shield"
                        className="h-14 md:h-16 w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
                    <button
                        onClick={() =>
                            document.getElementById('services')?.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                        className="hover:text-yellow-400 transition"
                    >
                        Services
                    </button>
                    <button
                        onClick={() =>
                            document.getElementById('about')?.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                        className="hover:text-yellow-400 transition"
                    >
                        About
                    </button>
                    <button
                        onClick={() =>
                            document.getElementById('contact')?.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                        className="hover:text-yellow-400 transition"
                    >
                        Contact
                    </button>
                    <a
                        href="https://wa.me/6580210471"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition flex items-center space-x-1"
                    >
                        <span>WhatsApp</span>
                        {/* Your WhatsApp icon here */}
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-yellow-400"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <nav className="flex flex-col space-y-2 text-sm uppercase bg-black">
                        <button
                            onClick={() => {
                                document
                                    .getElementById('services')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                                setMenuOpen(false)
                            }}
                            className="hover:text-yellow-400 text-left"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => {
                                document
                                    .getElementById('about')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                                setMenuOpen(false)
                            }}
                            className="hover:text-yellow-400 text-left"
                        >
                            About
                        </button>
                        <button
                            onClick={() => {
                                document
                                    .getElementById('contact')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                                setMenuOpen(false)
                            }}
                            className="hover:text-yellow-400 text-left"
                        >
                            Contact
                        </button>
                        <a
                            href="https://wa.me/6580210471"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-green-400 text-left flex items-center space-x-1"
                        >
                            <span>WhatsApp</span>
                            {/* Your WhatsApp icon here */}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
