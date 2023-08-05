import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState("");
  const [goals, setGoals] = useState<string[]>([]); // string[] is an array of strings

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, enterGoalText]);
  }

  function addInputHandler(enteredText: string) {
    setEnterGoalText(enteredText);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What's Your Goal?"
          onChangeText={addInputHandler}
        />
        <Button title="Add Something" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(goal) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.item}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    marginRight: 10,
    padding: 8,
  },

  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    margin: 6,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },

  goalText: {
    color: "cyan",
  },
});
