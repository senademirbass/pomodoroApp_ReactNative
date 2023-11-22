import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { TimerCountDownDisplay } from "./components/TimerCountDownDisplay";
import { TimerToggleButton } from "./components/TimerToggleButton";
import { TimerModes } from "./types/DisplayType";
import { TimerModeDisplay } from "./components/TimerModeDisplay";
import styles from "./styles/styles";

const FOCUS_TIME_MINUTES = 25 * 60 * 1000;
const BREAK_TIME_MINUTES = 5 * 60 * 1000;
export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode("Focus");
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    if (timerInterval !== null) {
      clearInterval(timerInterval as any);
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: timerMode === "Break" ? "#ff1493" : "#00bfff" },
      }}
    >
      <StatusBar style="auto" />
      <TimerModeDisplay timerMode={timerMode} />
      <TimerToggleButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
    </View>
  );
}
