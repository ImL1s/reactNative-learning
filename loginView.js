import React, { Component } from 'react';
import {
    Image,
    TextInput,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

var fullWidth = Dimensions.get('window').width;
var fullHeight = Dimensions.get('window').height;
var bgColor = '#EEEEEE';

class loginView extends Component {
    render() {
        return (
            <View style={styles.contatiner}>
                <Image style={styles.bigHead} source={require('./image/icon.png')} />

                <TextInput style={styles.textInput} placeholder={'請輸入用戶名'} />
                <TextInput style={styles.textInput} placeholder={'請輸入密碼'} password={true} />
                <View style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>登入</Text>
                </View>
                <View style={styles.otherTextGroup}>
                    <Text style={styles.otherText}>無法登入</Text>
                    <Text style={styles.otherText}>新用戶</Text>
                    <Text style={styles.otherText}>新用戶</Text>
                </View>
                {/*<View>
                    <Text>新用戶</Text>
                </View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1,
        backgroundColor: bgColor,
        alignItems: 'center'
    },
    bigHead: {
        marginBottom: 30,
        marginTop: 50,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    textInput: {
        marginBottom: 1,
        width: fullWidth,
        height: 38,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    loginBtn: {
        width: fullWidth * 0.8,
        height: 35,
        backgroundColor: '#2276FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 30
    },
    loginBtnText: {
        color: 'white'
    },
    otherTextGroup:{
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: bgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: fullWidth
    },
    otherText:{
        color:'#3377DD'
    }
});

module.exports = loginView;