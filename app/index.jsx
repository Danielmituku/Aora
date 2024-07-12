import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';



export default function App() { 
  return (
    <View>
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href='/home' style={{color: 'blue'}}>Go to profile</Link>
    </View>
  );
}

