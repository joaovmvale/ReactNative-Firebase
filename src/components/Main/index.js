import React, { useState } from "react";
import { View, Button, TextInput, Alert } from "react-native";

import firebase from "./src/Firebase";

export default function Main({ navigation }) {
  const [phrase, setPhrase] = useState(null);
  const [phraseNumber, setPhraseNumber] = useState(null);

  async function inputPhrase() {
    await firebase
      .ref()
      .update({ phraseNumber: phrase })
      .then(() => {
        Alert.alert("Frase salva!");
      })
      .catch((e) => Alert.alert(e.message));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Insira a frase"
      />
      <Button onPress={inputPhrase} title={"Gravar frase"} />
    </View>
  );
}
