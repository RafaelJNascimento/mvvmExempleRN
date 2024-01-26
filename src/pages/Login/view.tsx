import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button,
} from 'react-native';

import useLoginViewModel from './view.model';

const LoginView: React.FC = () => {

    const {
        email,
        password,
        setEmail,
        setPassword,
        isLoading,
        onSubmit
    } = useLoginViewModel();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Form}>
                <Text style={styles.Label}>
                    E-mail
                </Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='email@fleye.com.br'
                    style={styles.Input}
                />
                <Text style={styles.Label}>
                    Password
                </Text>
                <TextInput
                    value={password}
                    placeholder='*****'
                    onChangeText={setPassword}
                    style={styles.Input}
                />
                <Button
                    title='Login'
                    onPress={onSubmit}
                    disabled={isLoading}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: '#abbeed',
    },
    Form: {
        width: '90%',
        height: '30%',
        borderRadius: 5,
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    Input: {
        height: 40,
        width: '100%',
        paddingLeft: 8,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#e5e6eb',
    },
    Label: {
        color: '#424242',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 2,
        marginBottom: 5
    },
});

export default LoginView;
