import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import { CustomButtons } from "../../guessComponents/CustomButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [value, setValue] = useState("");

  const numberHandler = (enteredValue: string) => {
    setValue(enteredValue);
  };

  const reset = () => {
    setValue("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: reset },
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        maxLength={3}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberHandler}
      />

      <View style={styles.button}>
        <CustomButtons label="Reset" touched={reset} />
        <CustomButtons label="Submit" touched={confirmInputHandler} />
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72063c",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 8,
    marginTop: 80,
  },

  input: {
    borderBottomWidth: 1,
    marginVertical: 8,
    height: 40,
    fontSize: 30,
    borderBottomColor: "yellow",
    borderRadius: 5,
    color: "yellow",
    width: 40,
    textAlign: "center",
  },

  button: {
    flexDirection: "row",
    gap: 10,
  },
});
