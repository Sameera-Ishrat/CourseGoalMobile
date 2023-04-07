import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import "./components/GoalItem";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [coarseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalsHandler = (enteredGoalText) => {
    setCourseGoal((prevGoals) => [
      { text: enteredGoalText, id: Math.random().toString() },
      ...prevGoals,
    ]);
    setModalIsVisible(false);
    //endAddGoalHandler();
  };

  const deleteItemsHandler = (id) => {
    console.log("Delete clicked");
    setCourseGoal((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      return updatedGoals;
    });
  };

  return (
    <>
    <StatusBar style="light" />
     <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textConatiner}
          placeholder="Enter your Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalsHandler} />
      </View> */}
      <Button title="Add new Goals" onPress={startAddGoalHandler} color={"violet"} />

      <GoalInput
        onAddGoal={addGoalsHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={coarseGoal}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            // <View style={styles.goalItem}>
            //   <Text style={styles.goalText}>{itemData.item.text}</Text>
            // </View>
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteItemsHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#1e085a'
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomColor: "#ccc",
  //   borderBottomWidth: 1,
  // },
  // textConatiner: {
  //   borderWidth: 3,
  //   color: "#000",
  //   width: "70%",
  //   padding: 8,
  //   marginRight: 5,
  // },
  goalsContainer: {
    flex: 5,
  },
 
  // goalItem: {
  //   backgroundColor: "purple",
  //   margin: 8,
  //   padding: 5,
  //   borderRadius: 6,
  // },
  // goalText: {
  //   color: "white",
  // },
});
