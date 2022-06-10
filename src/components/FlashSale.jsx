import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_item } from '../../redux/actions/cartAction'
import { useNavigation } from '@react-navigation/native'

export default function FlashSale({ navigation }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-garden-69209.herokuapp.com/flashSales')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])
    const getState = useSelector((state) => state.cartReducer.cart)
    const dispatch = useDispatch()
    const handleAddItem = (e) => {
        dispatch(add_item(e))
    }


    const navigator = useNavigation()
    return (

        <View>
            <View>
                <View>
                    <Text style={styles.titleSection}>Flash Sale</Text>
                </View>


                <FlatList
                    data={products}
                    horizontal


                    keyExtractor={(key) => key._id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginRight: 20, marginVertical: 10 }}>
                                <View>
                                    <Image source={{ uri: item.img }} style={styles.image} />
                                </View>
                                <View >
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '500', marginVertical: 6 }}>৳{item.price}</Text>
                                    <TouchableOpacity
                                        onPress={() => navigator.navigate('Details', { item }, handleAddItem(item))}
                                        style={{ padding: 10, backgroundColor: 'red', borderRadius: 10, }}
                                    >
                                        <Text style={{ textAlign: 'center', color: 'white' }} >Buy Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}

                />









            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleSection: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#096266'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },


})