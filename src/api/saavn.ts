import { Song } from '../types/track';

const BASE_URL = 'https://saavn.sumit.co/api';

/**
 * Searches for songs based on a query string.
 * Uses GET /api/search/songs
 */
export const searchSongs = async (query: string): Promise<Song[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search/songs?query=${query}`);
    const json = await response.json();
    return json.data.results; // Returns the list of songs
  } catch (error) {
    console.error('Search API Error:', error);
    return [];
  }
};

/**
 * Fetches specific song details by ID.
 * Uses GET /api/songs/{id}
 */
export const getSongById = async (id: string): Promise<Song | null> => {
  try {
    const response = await fetch(`${BASE_URL}/songs/${id}`);
    const json = await response.json();
    return json.data[0]; 
  } catch (error) {
    console.error('Details API Error:', error);
    return null;
  }
};