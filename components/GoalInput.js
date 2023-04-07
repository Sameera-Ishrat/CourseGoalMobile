import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (enteredText) => {
    console.log(enteredText, "enteredText");
    setEnteredGoalText(enteredText);
    if (enteredGoalText.length > 0) {
      setIsValid(true);
    }
  };

  const addGoalHandler = () => {
    if (enteredGoalText.length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={'#f31282'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 3,
    borderColor:'#e4d0ff',
    borderRadius:6,
    color: "#fff",
    width: "100%",
    padding: 16,
    marginRight: 5,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});
