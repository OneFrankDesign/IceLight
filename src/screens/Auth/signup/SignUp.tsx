import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "../../../../lib/tailwind";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../../../config/firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl font-bold mb-4`}>Sign Up</Text>
      <TextInput
        style={tw`border border-gray-400 p-2 rounded mb-4`}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={tw`border border-gray-400 p-2 rounded mb-4`}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleSignUp}
        style={tw`bg-blue-500 p-2 rounded`}
      >
        <Text style={tw`text-white`}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
