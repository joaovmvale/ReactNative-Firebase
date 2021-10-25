import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: "4%",
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#ffc17b",
  },
  containerPhrases: {
    backgroundColor: "#ff7b7a",
    height: 50,
    margin: 5,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 5,
    padding: 5,
  },
  textPhrases: {
    fontSize: 12,
  },
  title: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Style;
