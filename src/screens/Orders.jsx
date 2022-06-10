import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import { getAuth } from 'firebase/auth';
const optionsPerPage = [2, 3, 4];
export default function Orders() {
    const auth = getAuth();
    const user = auth.currentUser


    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://guarded-garden-69209.herokuapp.com/myBooking/?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user.email])
    console.log(orders)

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable style={{ marginTop: 100 }}>

            <DataTable.Header>
                <DataTable.Title>So No</DataTable.Title>
                <DataTable.Title numeric>Name</DataTable.Title>
                <DataTable.Title numeric>Email</DataTable.Title>
                <DataTable.Title numeric>CardNumber</DataTable.Title>
                <DataTable.Title numeric>Address</DataTable.Title>
            </DataTable.Header>

            <FlatList
                data={orders}
                keyExtractor={(key) => key._id}
                renderItem={({ item }) => {
                    return (
                        <>

                            <DataTable.Row>
                                <DataTable.Cell>0</DataTable.Cell>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.email}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.cardNumber}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.address}</DataTable.Cell>
                            </DataTable.Row>
                        </>
                    )
                }}

            />





            <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
            />
        </DataTable>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Orders</Text>
        //     <FlatList
        //         data={orders}
        //         keyExtractor={(key) => key._id}
        //         renderItem={({ item }) => {
        //             return (
        //                 <View>
        //                     <Text>{item.name}</Text>
        //                     <Text>{item.email}</Text>
        //                     <Text>{item.cardNumber}</Text>
        //                 </View>
        //             )
        //         }}

        //     />

        // </View>
    )
}

const styles = StyleSheet.create({})

