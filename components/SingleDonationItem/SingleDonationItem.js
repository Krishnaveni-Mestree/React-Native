import React from "react";
import style from "./style";
import PropTypes from 'prop-types';

import { 
    Image,
    View,
 } from "react-native";

 import Header from "../Header/Header";
 import Badge from "../Badge/Badge";

const SingleDonationItem=(props)=>{
    return (
        <View>
            <View>
                <View style={style.badge}>
                    <Badge title={props.badgeTitle}/>
                </View>
                <Image
                    source={{uri:props.uri}}
                    style={style.image}
                    resizeMode={'contain'}
                />
            </View>
            <View style={style.donationInfo}>
                <Header title={props.donationTitle} type={3} color={'#0a043'} />
                <View style={style.price}>
                    <Header title={'$'+props.price.toFixed(2)} type={3} color={'#156cf7'} />
                </View>
            </View>
        </View>
    );
};

SingleDonationItem.propTypes={
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}
export default SingleDonationItem;