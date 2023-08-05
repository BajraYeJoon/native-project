import { StyleSheet, View, Text, Pressable } from "react-native";

type GoalItemProps = {
  goal: string;
  id?: number;
  onDelete: (id: any) => void; // Modified to take one argument
};

const GoalItem = (props: GoalItemProps) => {
  return (
    <Pressable
      android_ripple={{
        color: "cyan",
      }}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.goal}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
