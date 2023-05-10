import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  let tempDate = new Date();
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  const [text, setText] = useState(fDate);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours + " | Minutes: " + tempDate.getMinutes();
    setText(fDate);
    onDateChange(fDate);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Pressable onPress={() => showMode("date")}>
        <View style={styles.datecontainer}>
          <Text style={styles.datetext}>{text}</Text>
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChange}
          display="default"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  datecontainer: {
    textAlign: "center",
    marginVertical: 10,
    borderRadius: 10,
    marginRight: 150,
    borderColor: "green",
    borderWidth: 2,
    padding: 4,
    backgroundColor: "#f5f7fa",
  },
  datetext: {
    textAlign: "center",
    fontSize: 16,
  },
});
