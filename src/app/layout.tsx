import './globals.css'
import type { Metadata } from 'next'
import { Michroma } from 'next/font/google'
import Header from './components/Header'

const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Golden Shield',
  description: 'Professional Security Services in Singapore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={michroma.className}>
      <body className="bg-black text-white overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
