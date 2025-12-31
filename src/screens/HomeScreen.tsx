import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { usePlayerStore } from '../store/usePlayerStore';

export default function HomeScreen() {
  const [songs, setSongs] = useState([]);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);

  const search = async (query: string) => {
    const res = await fetch(`https://saavn.sumit.co/api/search/songs?query=${query}`);
    const json = await res.json();
    setSongs(json.data.results);
  };

  const playSong = async (song: any) => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: song.id,
      url: song.downloadUrl[4].link, // 320kbps link [cite: 554]
      title: song.name,
      artist: song.primaryArtists,
      artwork: song.image[2].link, // 500x500 image [cite: 534]
    });
    await TrackPlayer.play();
    setCurrentTrack(song);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Search songs..." onChangeText={search} style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => playSong(item)} style={{ padding: 10 }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}