import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

import FlashSale from "../components/FlashSale";
import Popular from "../components/Popular";
import LastView from "../components/LastView";
import SliderCard from "../components/SliderCard";
import SingleItem from "../components/SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { add_item } from "../../redux/actions/cartAction";
import Products from "../../Products";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";

import { Icon, withBadge } from "@rneui/themed";

export default function Home({ navigation }) {
  const getState = useSelector((state) => state.cartReducer.cart);
  const BadgedIcon = withBadge(getState.length)(Icon);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://native-admin.onrender.com/categoryWithProducts")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, [category]);
  // const [filter, setFilter] = useState(products)
  // const filterCategoryProducts = (cat) => {
  //     const item = products.find((pd) => pd.category === cat.name)
  //     setFilter(item)
  // }

  // console.log('ss', products)
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };

  const navigator = useNavigation();
  // const BadgedIcon = withBadge(1)(Icon)

  return (
    <ScrollView style={{ backgroundColor: "whitesmoke" }}>
      {/* <ImageBackground
                source={{ uri: "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687" }} style={{}}
            > */}
      <View style={{ paddingHorizontal: 30, marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../../assets/icons8-circled-user-male-skin-type-4-48.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <BadgedIcon
              type="ionicon"
              name="cart-outline"
              textStyle={{ color: "#EFE" }}
            />
          </TouchableOpacity>
        </View>

        {/* <Category /> */}

        <View>
          <Text style={[styles.titleSection, { marginVertical: 10 }]}>
            Category
          </Text>
          <FlatList
            data={category}
            // horizontal
            numColumns={3}
            keyExtractor={(key) => key._id}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CategorySingle", {
                        categoryDetails: item._id,
                      })
                    }
                  >
                    <View style={styles.card}>
                      <Image
                        style={styles.catImage}
                        source={{ uri: item.img }}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <SliderCard />
        <FlashSale />
        <Popular />
        <View>
          {/* <View>

                        <FlatList
                            data={category}
                            // horizontal
                            keyExtractor={(key) => key._id}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <View>
                                            <Text style={[styles.titleSection, { marginBottom: 10 }]}>{item.name}</Text>
                                        </View>
                                        <FlatList
                                            data={item.products}
                                            horizontal
                                            // keyExtractor={(key) => key._id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <View>
                                                            <Image source={{ uri: item.img }} style={styles.image} />
                                                        </View>
                                                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                                            <Text style={{ fontSize: 20, fontWeight: '500', marginVertical: 6 }}>৳{item.price}</Text>
                                                            <TouchableOpacity
                                                                onPress={() => navigation.navigate('Details', { item }, handleAddItem(item))}
                                                                style={{ padding: 10, backgroundColor: 'red', borderRadius: 25, width: 120 }}
                                                            >
                                                                <Text style={{ textAlign: 'center', color: 'white' }} >Buy Now</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                )
                                            }}

                                        />
                                    </>

                                )
                            }}

                        />
                    </View> */}
        </View>

        {/* <LastView /> */}
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#096266",
  },
  catImage: {
    width: 60,
    height: 65,
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 10,
  },
  titleSection: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#096266",
  },
  cardParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  card: {
    width: 120,
    height: 65,
  },
  imgStyle: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  cardTitle: {
    marginVertical: 10,
    color: "#096266",
  },
});
