import { Inter } from 'next/font/google'
import '@/app/globals.css'
import AdminHeader from './(admin-components)/Adminheader'
import Sidebar from './(admin-components)/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AdminHeader/>
                <Sidebar />
                {children}
            </body>
        </html>
    )
}