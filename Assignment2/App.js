import React from 'react';
import {SafeAreaView} from "react-native";
import MyText from './components/MyText.js';

const App = () => {
    return (
        <SafeAreaView>
            <MyText name="Krishna" />
        </SafeAreaView>
    );
};

export default App;
