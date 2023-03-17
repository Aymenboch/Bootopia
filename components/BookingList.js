import React, { useState } from 'react';
import { View, Text} from 'react-native';


const workspaceList = [
  {
    id: 1,
    name: 'Workspace 1',
    imageUrl: 'https://example.com/workspace1.jpg',
  },
  {
    id: 2,
    name: 'Workspace 2',
    imageUrl: 'https://example.com/workspace2.jpg',
  },
  {
    id: 3,
    name: 'Workspace 3',
    imageUrl: 'https://example.com/workspace3.jpg',
  },
];

const App = () => {
  return (
    <View>
      <Text>BookingList</Text>
    </View>
  );
};

export default App;