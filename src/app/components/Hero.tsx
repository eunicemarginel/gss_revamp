'use client'

export default function Hero() {
    return (
        <section
            className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 md:px-12"
            style={{
                backgroundImage: 'url("/hero-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="relative z-10 text-left px-6 md:px-16">
                <h1 className="text-3xl md:text-6xl font-bold leading-tight text-yellow-400">
                    Comprehensive <br />
                    <span className="text-white">Security Solutions</span>
                </h1>

                <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl">
                    Empowering businesses and communities in Singapore with cutting-edge security and professional guarding services.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
                    >
                        GET QUOTE
                    </button>

                    <button
                        onClick={() => {
                            const target = document.getElementById('services')
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' })
                                const header = document.getElementById('site-header')
                                header?.classList.remove('hidden')
                            }
                        }}
                        className="px-5 py-3 text-base bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
                    >
                        LEARN MORE
                    </button>
                </div>

            </div>

        </section>
    )
}
