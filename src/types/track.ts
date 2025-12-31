export interface SongImage {
  quality: string;
  link: string; // Used in Search API
  url?: string; // Used in Songs Details API
}

export interface DownloadUrl {
  quality: string;
  link: string; // Used in Search API
  url?: string; // Used in Songs Details API
}

export interface Song {
  id: string;
  name: string;
  album: {
    id: string;
    name: string;
  };
  duration: string | number;
  primaryArtists: string;
  image: SongImage[];
  downloadUrl: DownloadUrl[];
}