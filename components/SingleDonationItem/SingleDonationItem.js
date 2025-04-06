import React from "react";
import style from "./style";
import PropTypes from 'prop-types';

import { 
    Image,
    Pressable,
    View,
 } from "react-native";

 import Header from "../Header/Header";
 import Badge from "../Badge/Badge";

const SingleDonationItem=(props)=>{
    return (
        <Pressable onPress={()=>{props.onPress(props.donationItemId)}}>
            <View>
                <View style={style.badge}>
                    <Badge title={props.badgeTitle}/>
                </View>
                <Image
                    source={{uri:props.uri}}
                    style={style.image}
                    resizeMode={'cover'}
                />
            </View>
            <View style={style.donationInfo}>
                <Header title={props.donationTitle} type={3} color={'#0a043'} />
                <View style={style.price}>
                    <Header title={'$'+props.price.toFixed(2)} type={3} color={'#156cf7'} />
                </View>
            </View>
        </Pressable>
    );
};
SingleDonationItem.defaultProps={
    onPress:()=>{},
}

SingleDonationItem.propTypes={
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    onPress:PropTypes.func,
    donationItemId:PropTypes.number.isRequired,
}
export default SingleDonationItem;