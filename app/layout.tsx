import React from 'react';
import { Poppins } from 'next/font/google';


import './globals.css';
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from './lib/AntdRegistry';
import theme from './theme/themeConfig';
import NavBar from './components/Navbar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'NewCell-Store',
  description: 'Tienda de celulares',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <div className='flex flex-col min-h-screen'>
              <NavBar />
              {children}
            </div>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
