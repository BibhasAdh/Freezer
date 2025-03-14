import { NextResponse } from 'next/server';

const base = 'https://api.deezer.com';

export async function GET() {
  const endpoint = `${base}/chart/0/tracks?limit=10`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return NextResponse.json(data);
}