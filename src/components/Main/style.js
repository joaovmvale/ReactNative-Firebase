import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc17b",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  counterText: {
    textAlign: "left",
    fontSize: 12,
  },
  genericText: {
    textAlign: "justify",
    fontSize: 15,
  },
  input: {
    borderWidth: 2,
    width: 350,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    borderColor: "#8e3768",
    color: "#140e0e",
    backgroundColor: "#ff7b7a",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#8e3768",
    elevation: 10,
    padding: 10,
    margin: 10,
    marginBottom: 35,
    width: 200,
    height: 50,
  },
});

export default Style;
