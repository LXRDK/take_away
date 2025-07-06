import { CustomInputProps } from "@/type";
import React from "react";
import { Text, View } from "react-native";

const CustomInput = ({
  placeholder = "Enter Text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
}: CustomInputProps) => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  );
};

export default CustomInput;
