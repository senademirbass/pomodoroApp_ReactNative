import React from "react";
import { Timer } from "../types/TimerType";
import { Button, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../styles/styles";

export const TimerToggleButton: React.FC<Timer> = ({
  isTimerRunning,
  stopTimer,
  startTimer,
}) => {
  return (
    <>
      <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
        <View style={styles.pressIconBox}>
          <FontAwesome
            name={isTimerRunning ? "pause" : "play"}
            size={125}
            style={styles.pressIcon}
          />
        </View>
      </Pressable>
    </>
  );
};
