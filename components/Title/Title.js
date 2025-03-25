import React from "react";
import { 
    Text,
    View,
 } from "react-native";
 import PropTypes from 'prop-types'

 import { style } from "./style.js";


 const Title=(props)=>{
    return (
       <Text style={style.title}>{props.title}</Text>
    )
 }
 Title.propTypes={
    title:PropTypes.string.isRequired,

 }

 export default Title;