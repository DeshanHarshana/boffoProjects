import TopBar from '@/components/TopBar';
import { Appearance, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.fullScreenView}>
      <TopBar></TopBar>
      
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
