'use client'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400 py-10 px-6 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                {/* Left */}
                <p>
                    © {new Date().getFullYear()} Golden Shield Security Services Pte Ltd. All rights reserved.
                </p>

                {/* Right (optional links or credits) */}
                <div className="flex flex-wrap justify-center md:justify-end gap-4">
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hover:text-yellow-400 transition"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hover:text-yellow-400 transition"
                    >
                        About
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hover:text-yellow-400 transition"
                    >
                        Contact
                    </button>
                    <a
                        href="https://eunicemarginel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                    >
                        Built by Eunice Marginel
                    </a>
                </div>

            </div>
        </footer>
    )
}
