'use client'

export default function About() {
    return (
        <section
            id="about"
            className="bg-black text-white py-20 px-6 md:px-12"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT: Text content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                        About Golden Shield
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        Golden Shield Security Services represents the gold standard in the security industry, both in Singapore and internationally. Headquartered in Singapore, we are committed to delivering professional and reliable security solutions.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        Our management and operations team bring over 10 years of experience from the security industry, law enforcement, and armed forces. This expertise enables us to provide both armed and unarmed security services, locally and abroad.
                    </p>
                    <p className="text-gray-400 text-base text-justify">
                        We are one of the few Singapore-based agencies capable of supporting overseas security operations. Our team is diverse and experienced in handling a wide range of security assignments across various regions.

                        Locally, we offer a comprehensive range of security services and are actively involved in developing security technologies to enhance traditional guarding solutions.

                        Golden Shield is PLRD-certified and a proud member of the Security Association Singapore (SAS).
                    </p>
                </div>

                {/* RIGHT: Visual */}
                <div className="w-full h-60 md:h-[28rem] rounded-xl overflow-hidden flex items-center justify-center bg-black">
                    <img
                        src="/logo-main.png"
                        alt="Golden Shield Operations"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>

            {/* Mission, Values, Vision */}
            <div className="max-w-4xl mx-auto mt-20 space-y-12 text-center">
                <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Our Mission</h3>
                    <p className="text-gray-300">
                        To adapt and thrive in an ever-evolving global security landscape by delivering fully integrated, comprehensive solutions to our diverse clientele. We strive to provide every client with peace of mind — knowing they are protected by the gold standard in security services.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Our Values</h3>
                    <p className="text-gray-300">
                        At Golden Shield, we uphold the principles of reliability, integrity, and professionalism as the foundation of our operations. We are equally committed to our team — offering meaningful career paths, continuous development, and an environment where every individual is empowered to reach their full potential.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Our Vision</h3>
                    <p className="text-gray-300">
                        To be recognised as the industry benchmark — the Golden Standard for Security Services.
                    </p>
                </div>
            </div>
        </section>
    )
}
