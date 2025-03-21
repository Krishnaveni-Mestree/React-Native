import React, { useEffect, useState } from "react";
import {SafeAreaView, View, StyleSheet, Text } from "react-native";

const TimeOfDay = () => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    console.log("Current Hour:", hour);

    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    if (hour < 21) return 'evening';
    return 'night';
  };

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay);
  console.log("Initial Time of Day:", timeOfDay);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeOfDay = getTimeOfDay();
      console.log("Updated Time of Day:", newTimeOfDay);
      setTimeOfDay(newTimeOfDay);
    }, 60000); // Update every minute

    return () => {
      console.log("Clearing Interval");
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  const getMessage = () => {
    console.log("Rendering Message for Time of Day:", timeOfDay);
    switch (timeOfDay) {
      case 'morning': return 'Good morning!';
      case 'afternoon': return 'Good afternoon!';
      case 'evening': return 'Good evening!';
      default: return 'Good night!';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getMessage()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  text: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
  },
});

const App=()=>{
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Hii, Krishna</Text>
            <TimeOfDay/>
        </SafeAreaView>
    );
}



