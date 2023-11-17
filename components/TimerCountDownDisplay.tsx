import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Props } from "../types/PropsType";
import styles from "../styles/styles";

export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};
