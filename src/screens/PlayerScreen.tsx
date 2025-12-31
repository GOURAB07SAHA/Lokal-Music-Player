import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { usePlayerStore } from '../store/usePlayerStore';

export default function PlayerScreen() {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const { position, duration } = useProgress();

  if (!currentTrack) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentTrack.image[2].url || currentTrack.image[2].link }} style={styles.bigArtwork} />
      <Text style={styles.title}>{currentTrack.name}</Text>
      <Text style={styles.artist}>{currentTrack.primaryArtists}</Text>
      
      {/* Seek Bar Placeholder */}
      <View style={styles.progressBar}>
        <View style={[styles.progressLine, { width: `${(position / duration) * 100}%` }]} />
      </View>
      
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}><Text style={styles.btn}>⏮</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.play()}><Text style={styles.btn}>▶️</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}><Text style={styles.btn}>⏭</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  bigArtwork: { width: 300, height: 300, borderRadius: 8 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 20 },
  artist: { color: 'gray', fontSize: 18 },
  progressBar: { width: '80%', height: 4, backgroundColor: '#333', marginTop: 30 },
  progressLine: { height: 4, backgroundColor: '#1DB954' },
  controls: { flexDirection: 'row', marginTop: 40, width: '60%', justifyContent: 'space-between' },
  btn: { color: 'white', fontSize: 40 }
});