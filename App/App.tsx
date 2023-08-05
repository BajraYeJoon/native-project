// First Project APP.TSX. Move the app.tsx to the root of the project to run the app

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import GoalItem from "./components/FirstProject/GoalItem";
// import GoalInput from "./components/FirstProject/GoalInput";

// export default function App() {
//   const [goals, setGoals] = useState<any[]>([]); // string[] is an array of strings
//   const [modalVis, setModalVis] = useState(false);

//   function showModal() {
//     setModalVis(true);
//   }

//   function addGoalHandler(enterGoalText: string) {
//     setGoals((currentGoals) => [...currentGoals, enterGoalText]);
//     setModalVis(false);
//   }

//   function deleteGoal(id: string) {
//     setGoals((currentGoals) => {
//       return currentGoals.filter((goal) => goal.id !== id);
//     });
//     console.log("Delete Goal");
//   }

//   function endAddGoalHandler() {
//     setModalVis(false);
//   }

//   return (
//     <>
//       <StatusBar style="dark" />
//       <View style={styles.screen}>
//         <Button title="ADD NEW GOAL" color="cyan" onPress={showModal} />

//         {modalVis && (
//           <GoalInput
//             addGoalHandler={addGoalHandler}
//             visible={modalVis}
//             onCancel={endAddGoalHandler}
//           />
//         )}

//         <View style={styles.goalsContainer}>
//           <Text>List of Goals</Text>
//           <FlatList
//             data={goals}
//             renderItem={(goal) => {
//               return (
//                 <GoalItem
//                   goal={goal.item}
//                   id={goal.item.id}
//                   onDelete={deleteGoal}
//                 />
//               );
//             }}
//           ></FlatList>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: 50,
//     paddingHorizontal: 10,
//     flex: 1,
//   },

//   goalsContainer: {
//     flex: 5,
//   },
// });
