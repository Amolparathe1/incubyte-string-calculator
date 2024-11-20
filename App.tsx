/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Alert,
  Button
} from 'react-native';
import { add } from "./src/utils/StringCalculator";
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //String Calculator function call
  const handleCalculate = () => {
    try {
      const calculatedResult = add(input); // Perform calculation
      setResult(calculatedResult); // Update the result state
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }
    }
  };

  //String Calculator UI
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.innerContainer}>
        <Text
          style={[
            styles.title,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          String Calculator
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Enter numbers:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter numbers..."
            value={input}
            onChangeText={setInput}
            keyboardType="numeric"
          />
        </View>
        <Button title="Calculate" onPress={handleCalculate} />
        {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 16,
    width: "40%",
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    height: 40,
    width: "60%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    color: "green",
    textAlign: 'center',
  },
});

export default App;
