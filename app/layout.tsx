
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import Footer from '@/components/Footer'
import ProposalModal from '@/components/modals/ProposalModal'
import {Toaster}  from 'react-hot-toast'
import NextAuthProvider from './components/NextAuthProvider'
import { getServerSession } from 'next-auth'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'WeeJob',
  description: 'Freelancing Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
      <html lang="en">
          <body className="w-full ">
              {/* <SessionProvider> */}
              <Toaster />
              <NextTopLoader showSpinner={false} speed={10} crawlSpeed={10}/>
              <NextAuthProvider session={session}>
                  <Navbar />
                  <LoginModal />
                  <RegisterModal />
                  <ProposalModal />
                  <div className="pt-[7vh] ">{children}</div>
                  <Footer />
              </NextAuthProvider>
              {/* </SessionProvider> */}
          </body>
      </html>
  )
}
