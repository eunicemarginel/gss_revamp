'use client'

export default function Services() {
    const services = [
        {
            title: 'Events and Enforcement Services',
            desc: 'Providing trained personnel for crowd control, event security, and enforcement duties.',
        },
        {
            title: 'Concierge Services',
            desc: 'Professional front-desk and reception staff for residential and commercial properties.',
        },
        {
            title: 'Private Investigation',
            desc: 'Discreet, licensed investigative services tailored for personal or corporate matters.',
        },
        {
            title: 'Drones',
            desc: 'Aerial surveillance solutions for wide-area monitoring and security assessments.',
        },
        {
            title: 'Access Control Systems',
            desc: 'Apps and hardware-based control for secured facility access and entry logging.',
        },
        {
            title: 'Security Guarding Services',
            desc: 'Manned guarding solutions with trained officers for 24/7 protection.',
        },
        {
            title: 'Security Technology & CCTV',
            desc: 'Installation and maintenance of surveillance systems and equipment.',
        },
        {
            title: 'International Armed/Unarmed Security',
            desc: 'Trained officers for sensitive deployments abroad or high-risk local environments.',
        },
        {
            title: 'Executive Protection',
            desc: 'Close-protection for VIPs, dignitaries, and high-profile clients.',
        },
        {
            title: 'Traffic Marshal & Crowd Control',
            desc: 'Coordination of vehicular and human traffic for safe, efficient movement.',
        },
        {
            title: 'Security Systems & Apps',
            desc: 'Custom-built tools to digitise and monitor your full security workflow.',
        },
        {
            title: 'Remote Monitoring Services',
            desc: '24/7 off-site surveillance by our trained command centre specialists.',
        },
        {
            title: 'Port Security & Training',
            desc: 'Licensed services for maritime and port operations with staff training modules.',
        },
        {
            title: 'Training & Certification',
            desc: 'Skills development and in-house courses for security industry professionals.',
        },
        {
            title: 'Security Consultancy',
            desc: 'Comprehensive security risk assessments and solutions planning.',
        },
    ]

    return (
        <section
            id="services"
            className="bg-black text-white pt-28 md:pt-32 px-8 md:px-12 pb-16"
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
                    Our Services
                </h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Comprehensive security solutions tailored for various industries across Singapore.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow hover:shadow-yellow-400/30 transition"
                    >
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
