import { View, Text, Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  label: string;
  touched: () => void;
}

export const CustomButtons = ({ label, touched }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={touched}
        android_ripple={{
          color: "hsla(0, 0%, 100%, 0.8)",
        }}
        style={styles.innerContainer}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
  },

  innerContainer: {
    paddingHorizontal: 15,
    backgroundColor: "yellow",
    paddingVertical: 10,
    elevation: 8,
  },
});
