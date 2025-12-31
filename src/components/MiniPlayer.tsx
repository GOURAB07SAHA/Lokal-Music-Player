import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { usePlayerStore } from '../store/usePlayerStore';

export default function MiniPlayer({ onOpenPlayer }: { onOpenPlayer: () => void }) {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const { playing } = useIsPlaying();

  if (!currentTrack) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onOpenPlayer}>
      <Image source={{ uri: currentTrack.image[1].url || currentTrack.image[1].link }} style={styles.artwork} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{currentTrack.name}</Text>
        <Text numberOfLines={1} style={styles.artist}>{currentTrack.primaryArtists}</Text>
      </View>
      <TouchableOpacity onPress={() => playing ? TrackPlayer.pause() : TrackPlayer.play()}>
        <Text style={styles.playBtn}>{playing ? "⏸" : "▶️"}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { height: 60, backgroundColor: '#1c1c1c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderTopWidth: 1 },
  artwork: { width: 45, height: 45, borderRadius: 4 },
  info: { flex: 1, marginLeft: 10 },
  title: { color: 'white', fontWeight: 'bold' },
  artist: { color: 'gray', fontSize: 12 },
  playBtn: { fontSize: 24, color: 'white', paddingHorizontal: 10 }
});