import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'WeeJob',
  description: 'Freelancing Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className="w-full ">
              <Navbar />
              <LoginModal/>
              <RegisterModal/>
              
              <div className='pt-[7vh] '>{children}</div>
              <Footer/>
          </body>
      </html>
  )
}
