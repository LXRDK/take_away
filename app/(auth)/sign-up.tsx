import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function SignUp() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const submit = async () => {
    if (!form.email || !form.password || !form.name) {
      return Alert.alert("error", "Please fill all fields");
    }
    setSubmitting(true);
    try {
      //Call Appwrite signiup function

      Alert.alert("Success", "You have signed Up successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Something went wrong");
    }
    setSubmitting(false);
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter Full Name"
        value={form.name}
        label="FullName"
        keyboardType="email-address"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, name: text }));
        }}
      />
      <CustomInput
        placeholder="Enter Email"
        value={form.email}
        label="Email"
        keyboardType="email-address"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
      />
      <CustomInput
        placeholder="Enter Password"
        value={form.password}
        label="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
      />
      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />
      <View className="flex justify-center  mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          {" "}
          Already have an account?
        </Text>
        <Link href="/sign-in" className="text-primary base-bold">
          Sign In
        </Link>
      </View>
    </View>
  );
}
