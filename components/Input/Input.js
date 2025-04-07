import React, { useState } from "react";
import { View,Text,TextInput } from "react-native";
import PropTypes from 'prop-types';

import style from "./style";

const Input=(props)=>{
    const [value,setValue]=useState('')
    return (
        <View>
            <Text style={style.label}>{props.label}</Text>
            <TextInput
                style={style.input}
                value={value}
                placeholder={props.placeholder ? props.placeholder : null}
                onChangeText={(val)=>{
                    setValue(val);
                    props.onChangeText(val);
                }}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

Input.defaultProps={
    onChangeText:()=>{},
    keyboardType:'default',
    secureTextEntry:false,
}

Input.propTypes={
    label:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    onChangeText:PropTypes.func,
    keyboardType:PropTypes.string,
    secureTextEntry:PropTypes.bool,
};

export default Input;