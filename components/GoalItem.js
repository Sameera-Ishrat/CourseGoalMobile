import { StyleSheet, View, Text, Pressable, onDelete, id } from "react-native";

const GoalItem = ({ text, id, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteHandler}
        android_ripple={{ color: "#000" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {/* <Text style={styles.goalText}>{itemData.item.text}</Text> */}
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    margin: 8,
    // padding: 5,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.4,
  },
});
