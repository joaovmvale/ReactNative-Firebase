import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import { Button } from "react-native-paper";

import firebase from "../../Firebase";

import Style from "./style";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Main() {
  const [phrase, setPhrase] = useState("");
  const [numberDisplay, setNumberDisplay] = useState(null);
  const [phraseDisplay, setPhraseDisplay] = useState(null);

  async function inputPhrase() {
    let currentNumber = await getCurrentNumber();
    let inputPhrase = await getPhrase(currentNumber);

    if (inputPhrase == null) {
      await firebase
        .ref()
        .update({ [currentNumber]: "   " + phrase })
        .then(() => {
          Alert.alert("Frase salva!");
        })
        .catch((e) => Alert.alert(e.message));
    }

    while (inputPhrase != null) {
      currentNumber++;
      inputPhrase = await getPhrase(currentNumber);

      if (inputPhrase == null) {
        await firebase
          .ref()
          .update({ [currentNumber]: "   " + phrase })
          .then(() => {
            setPhrase("");
            Alert.alert("Frase salva!");
          })
          .catch((e) => Alert.alert(e.message));
      }
    }
  }

  async function getCurrentNumber() {
    return (await firebase.ref("frase").get()).val();
  }

  async function getPhrase(number) {
    return (await firebase.ref(`${number}`).get()).val();
  }

  useEffect(() => {
    (async () => {
      let number = await getCurrentNumber();
      let phrase = await getPhrase(number);

      setNumberDisplay(number);
      setPhraseDisplay(phrase);
    })();
  }, []);

  return (
    <DismissKeyboard>
      <View style={Style.container}>
        <Text style={Style.title}>Insert Phrase</Text>

        <TextInput
          style={Style.input}
          maxLength={119}
          multiline={true}
          autoCorrect={false}
          onChangeText={setPhrase}
          value={phrase}
          onPressOut={() => {
            Keyboard.dismiss;
          }}
          placeholder="Write your phrase"
          placeholderTextColor="#000000"
        />

        <Text style={Style.counterText}>
          Characters left: {119 - phrase.length}
        </Text>

        <Button style={Style.button} mode="contained" onPress={inputPhrase}>
          SEND
        </Button>

        <Text style={Style.title}>Current Phrase</Text>

        <Text style={Style.genericText}>
          {numberDisplay} -{phraseDisplay}
        </Text>
      </View>
    </DismissKeyboard>
  );
}
