"use client";

import { Rubik } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigation/Sidebar';
import Player from '@/components/player/Player';
import SearchBar from '@/components/searchbar/SearchBar';
import ReduxProvider from '@/redux/ReduxProvider';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'Music platform',
  description: 'Discover new artists and music. Find top trending songs, artists information, and album tracklists.',
}

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang='en' className={ rubik.className }>
      <link rel="icon" href="./favicon.png" sizes="any" />

      <body className={isLoginPage ? 'login-body' : ''}>
        <ReduxProvider>
          <div className='wrapper'>
            {!isLoginPage && <Sidebar />}

            <div className='main-container'>
              {!isLoginPage && <SearchBar />}

              <main>
                { children }
              </main>
            </div>

            {!isLoginPage && <Player />}
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}