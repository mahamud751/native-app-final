import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';


// import { useRouter } from 'next/router'
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
// import useToken from '../hooks/useToken';
// import auth from '../firebase.init';
// import Loading from '../components/Loading';
// import Link from 'next/link'
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
import auth from '../../firebase.init';

import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigation = useNavigation()
    navigation.navigate("Home")
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);



    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    // if (error || gError || updateError) {
    //     signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    // }


    if (token) {
        navigation.navigate("/home")
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }

    return (
        <View style={{ marginTop: 200 }}>
            <Text style={styles.label}>First name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Last name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="lastName"
                rules={{ required: true }}
            />

            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color
                    title="Reset"
                    onPress={() => {
                        reset({
                            firstName: 'Bill',
                            lastName: 'Luo'
                        })
                    }}
                />
            </View>

            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color
                    title="Button"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    input: {
        width: '100%'
    }
})