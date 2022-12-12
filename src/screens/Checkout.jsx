import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { FancyAlert } from "react-native-expo-fancy-alerts";

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
// import { authentication } from '../../firebase.init'

import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

export default function Checkout({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState("");
  // const initialInfo = { name: '', email: '' }
  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const orders = useSelector((state) => state.cartReducer.cart);

  // const [bookingInfo, setBookingInfo] = useState(initialInfo)

  // const handleOnBlur = e => {
  //     const field = e.target.name
  //     const value = e.target.value
  //     const newValue = { ...bookingInfo }

  //     newValue[field] = value
  //     setBookingInfo(newValue)
  // }

  // Handle Product submit
  const handleModal = (e) => {
    const appointment = {
      name,
      email,
      cardNumber,
      address,
      orders,
    };
    console.log(appointment);
    fetch("https://native-admin.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        // setCart('')
        setVisible(!visible);
        // navigation.navigate('Home')
      });
    // setVisible(!visible);
    setVisible(visible);
    // alert('Success')
    e.preventDefault();
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Online_Groceries-pana-removebg-preview.png")}
              style={{ width: 160, height: 140 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Hello Dear
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              borderRadius: 20,
            }}
            placeholder="Enter username"
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              marginTop: 10,
              borderRadius: 20,
            }}
            placeholder="Enter email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />

          <TextInput
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              marginVertical: 10,
              borderRadius: 20,
            }}
            placeholder="+880........."
            autoCapitalize="none"
            autoCorrect={false}
            value={cardNumber}
            onChangeText={(e) => setCardNumber(e)}
          />
          <TextInput
            style={{
              padding: 10,
              backgroundColor: "whitesmoke",
              borderRadius: 20,
            }}
            placeholder="123 Mirpur"
            autoCapitalize="none"
            autoCorrect={false}
            value={address}
            onChangeText={(e) => setAddress(e)}
          />
          {/* <TextInput style={{ padding: 10, backgroundColor: "whitesmoke", borderRadius: 20 }} placeholder="Enter phone number"
                        autoCapitalize='none'
                        autoCorrect={false}
                        name="phone"
                        defaultValue=" "
                        onBlur={handleOnBlur}
                    />
                    <TextInput style={{ padding: 10, marginVertical: 10, backgroundColor: "whitesmoke", borderRadius: 20 }} placeholder="+12299....."
                        autoCapitalize='none'
                        autoCorrect={false}
                        name="cardNumber"
                        defaultValue={''}
                        onBlur={handleOnBlur}
                    />
                    <TextInput style={{ padding: 10, backgroundColor: "whitesmoke", borderRadius: 20 }} placeholder="123 Gulsan"
                        autoCapitalize='none'
                        autoCorrect={false}
                        name="address"
                        defaultValue={''}
                        onBlur={handleOnBlur}
                    /> */}
        </View>

        <View>
          <TouchableOpacity
            onPress={handleModal}
            style={{
              backgroundColor: "#4630EB",
              padding: 20,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Payment
            </Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
      <FancyAlert
        visible={visible}
        icon={
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              borderRadius: 50,
              width: "100%",
            }}
          >
            <Text>🤓</Text>
          </View>
        }
        style={{ backgroundColor: "white" }}
      >
        <Text style={{ marginTop: -16, marginBottom: 32 }}>
          Successfully payment
        </Text>
      </FancyAlert>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});
