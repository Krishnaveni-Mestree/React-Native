import React, { useRef , useState} from "react";

import { Pressable,TextInput, Text } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { scaleFontSize } from "../../assets/styles/scaling";
import PropTypes from 'prop-types';

const Search=(props)=>{
    const [search,setSearch]=useState('')
    const textInputRef=useRef(null);
    const handleFocus=()=>{
        textInputRef.current.focus();
    };
    const handleSearch=(searchVal)=>{
        setSearch(searchVal); 
        props.onSearch(searchVal)
    }
    return (
        <Pressable 
            style={style.searchInputContainer}
            onPress={handleFocus}
        >
            <FontAwesomeIcon icon={faSearch} color={'#25c0ff'} size={scaleFontSize(22)}/>
            <TextInput
                ref={textInputRef}
                style={style.searchInput}
                value={search}
                onChangeText={(val)=>handleSearch(val)}
            />
        </Pressable>
    );
};

Search.defaultProps={
    onSearch:()=>{},
};

Search.propTypes={
    onSearch:PropTypes.func,
}

export default Search;