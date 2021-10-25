import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import firebase from "../../Firebase";

import Style from "./style";

export default function List() {
  const [list, setList] = useState([]);

  async function readLastPhrases() {
    firebase.ref().on("value", (snapshot) => {
      let lista = [];
      snapshot.forEach((child) => {
        lista.push({ key: child.key, value: child.val() });
      });
      lista.reverse().splice(0, 2);
      setList(lista);
    });
  }

  async function excludePhrase(item) {
    Alert.alert(
      "Exclude Phrase",
      "Do you really want to exclude this phrase?",
      [
        {
          text: "No",
          style: "cancel",
        },
        { text: "Yes", onPress: () => deletePhrase(item) },
      ],
      { cancelable: false }
    );
  }

  async function deletePhrase(item) {
    firebase.ref(item.key).remove();
  }

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => excludePhrase(item)}>
      <View style={Style.containerPhrases}>
        <Text style={Style.textPhrases}>
          {item.key}: {item.value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  useEffect(() => {
    (async () => {
      readLastPhrases();
    })();
  }, []);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Phrases List</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        style={Style.flatList}
      />
    </View>
  );
}
