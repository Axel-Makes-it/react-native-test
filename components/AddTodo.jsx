import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Alert } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const handleAddTodo = () => {
    if (text.length > 3) {
      submitHandler(text);
      setText(""); // Clear the input field
    } else {
      Alert.alert("Ooops! Todos must be over 3 chars long", "Try again", [
        {
          text: "Understood",
          onPress: () => {
            console.log("alert closed");
          },
        },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={handleAddTodo} title="add todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
