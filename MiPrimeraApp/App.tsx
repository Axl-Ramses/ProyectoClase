import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mi primera app!</Text>
      <StatusBar style="auto" />
      <CustomButton title={"App"}
        onPress={() => {
          console.log("Press desde boton App");
        }}
      />
      <CustomButton title={"App"}
        onPress={() => {
          console.log("Press desde boton Secundario");
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
