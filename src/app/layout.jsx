'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Rubik } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigation/Sidebar';
import Player from '@/components/player/Player';
import SearchBar from '@/components/searchbar/SearchBar';
import ReduxProvider from '@/redux/ReduxProvider';

export const metadata = {
  title: 'Music platform',
  description: 'Discover new artists and music. Find top trending songs, artists information, and album tracklists.',
}

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = document.cookie.includes('auth=true');
    
    if (!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
      router.push('/login');
    }
  }, []);

  return (
    <html lang='en' className={ rubik.className }>
      <link rel="icon" href="./favicon.png" sizes="any" />

      <body>
        <ReduxProvider>
          <div className='wrapper'>
            <Sidebar />
            
            <div className='main-container'>
              <SearchBar />

              <main>
                { children }
              </main>
            </div>

            <Player />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
