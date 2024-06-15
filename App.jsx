
import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import App_Navigation from './config/App_Navigation';

import { Text, View } from "react-native";

const App = () => {
  const [Condition, setCondition] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setCondition(true)
    },3000)
  },[])
  return (
    <>
    {
    Condition ? (<>
    <App_Navigation/>
    </>):(
      <>
    <View style={{flex:1,backgroundColor:"#2E3192"}} >
    <LottieView
      source={require("./assests/Animation - 1716337160882 (1).json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop
    />
    </View> 
      </>
    )
    }
    </>
    
  );
};

export default App;
