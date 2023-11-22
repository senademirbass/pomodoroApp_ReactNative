import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00bfff",
  },
  timerCountDownText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
  pressIcon: {
    alignSelf: "center",
    color: "#800080",
  },
  pressIconBox: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#fff",
    marginVertical: 50,
  },
  displayMode: {
    alignItems: "center",
    width: "100%",
  },
  timerModeText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fffacd",
  },
});

export default styles;
