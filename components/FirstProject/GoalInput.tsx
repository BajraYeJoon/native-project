import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props: {
  addGoalHandler: (enterGoalText: string) => void;
  onCancel: () => void;
  visible: boolean;
}) => {
  const [enterGoalText, setEnterGoalText] = useState("");

  function addInputHandler(enteredText: string) {
    setEnterGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enterGoalText);
    setEnterGoalText("");
  }

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/splash.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="What's Your Goal?"
          onChangeText={addInputHandler}
          value={enterGoalText}
        />
        <View style={styles.button}>
          <Button title="Add Something" onPress={addGoalHandler} />
          <Button title="Close" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  image: {
    width: 500,
    height: 200,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    padding: 8,
  },

  button: {
    width: "60%",
    gap: 10,
  },
});
