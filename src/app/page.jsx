'use client';

import Playlists from "@/components/others/Playlists";
import TrackListContainer from "@/components/others/TrackListContainer";
import { fetchTopTracks } from "@/utils/fetchers";
import TopArtistsContainer from "@/components/others/TopArtistsContainer";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      router.push('/login');
    } else {
      fetchTopTracks()
        .then(data => setTracks(data))
        .catch(err => {
          console.error('Error fetching top tracks:', err);
          setError('Failed to fetch top tracks. Please try again later.');
        });
    }
  }, [router]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!tracks.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home-container'>
      <TrackListContainer
        header='Trending right now'
        tracks={tracks}
      />
      <TopArtistsContainer limit={3} />
      <Playlists />
    </div>
  );
}