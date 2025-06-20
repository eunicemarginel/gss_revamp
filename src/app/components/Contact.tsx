'use client'

import React, { useState } from 'react'

export default function Contact() {
    const [successMsg, setSuccessMsg] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = new FormData(form)

        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbwBItfgCT014C3LRbFLg3s46szpSGLc80rNeFUBdMUp1GqzC2Em0zkuW3lGyur1WcXEbA/exec',
            {
                method: 'POST',
                body: data,
            }
        )

        if (response.ok) {
            setSuccessMsg(true)
            form.reset()
            setTimeout(() => setSuccessMsg(false), 5000)
        } else {
            alert('Something went wrong. Please try again.')
        }
    }

    return (
        <section
            id="contact"
            className="bg-black text-white py-20 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT: Info + address */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Reach out to us for any enquiries, quotes, or collaboration
                            opportunities.
                        </p>
                    </div>

                    <div className="text-sm space-y-6">
                        <div>
                            <h4 className="text-yellow-400 font-semibold mb-1">
                                Our Address
                            </h4>
                            <p className="text-gray-400">
                                Golden Shield HQ<br />
                                123 Security Lane<br />
                                Singapore 123456
                            </p>
                        </div>

                        <div>
                            <h4 className="text-yellow-400 font-semibold mb-1">
                                Contact Details
                            </h4>
                            <p className="text-gray-400">
                                📞 +65 9123 4567<br />
                                ✉️ hello@goldenshield.com.sg
                            </p>
                        </div>

                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-yellow-400">
                                FB
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400">
                                IG
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Form */}
                <div className="bg-black text-white p-8 shadow-md">
                    {successMsg && (
                        <div className="mb-6 p-4 bg-green-600 text-white shadow-md transition duration-300 ease-in-out">
                            Message successfully sent. We will get back to you shortly.
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                name="phone"
                                type="tel"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="flex items-center space-x-2 text-sm text-gray-500 cursor-pointer">
                                <input type="file" className="hidden" />
                                <span>📎 Upload file</span>
                            </label>
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
                            >
                                SEND MESSAGE →
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="mt-16 w-full h-72 md:h-96 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6974243467894!2d103.83073427550285!3d1.3581692615479561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17e166cebc9b%3A0x91de0d678f19a8ca!2sGOLDEN%20SHIELD%20SECURITY%20SERVICES!5e0!3m2!1sen!2ssg!4v1750456066815!5m2!1sen!2ssg"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
