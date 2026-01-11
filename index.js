import { registerRootComponent } from 'expo';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './service';

// 1. Register the main App component
// This replaces the default entry point so we can add the playback service
registerRootComponent(App);

// 2. Register the Playback Service
// This is critical for Android. It tells the OS how to handle 
// play/pause/skip events even when the app is in the background.
TrackPlayer.registerPlaybackService(() => playbackService);