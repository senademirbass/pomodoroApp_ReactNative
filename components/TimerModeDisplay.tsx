import React from "react";
import { View, Text } from "react-native";
import { Display } from "../types/DisplayType";
import styles from "../styles/styles";

export const TimerModeDisplay: React.FC<Display> = ({ timerMode }) => {
  return (
    <>
      <View style={styles.displayMode}>
        <Text style={styles.timerModeText}>
          {timerMode} Time {timerMode === "Focus" ? "🤯" : "👌"}
        </Text>
      </View>
    </>
  );
};
