import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { usePlayerStore } from '../store/usePlayerStore';

export default function QueueScreen() {
  const { queue, removeFromQueue } = usePlayerStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <FlatList
        data={queue}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 15, borderBottomWidth: 0.5, borderColor: '#333' }}>
            <Text style={{ color: 'white', flex: 1 }}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeFromQueue(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}