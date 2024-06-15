import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const getStarted = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: "#2E3192" }}>
      <View style={{padding: 10 }}>
        <Image
          style={{ height: 400, width: '100%' }}
          resizeMode='stretch'
          source={require('../assests/pic1.png')}
        />
      </View>
      <View style={{alignItems:"center"}}>
        <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Get Started with</Text>
      <View style={{alignItems:"center",padding:20}} >
      <Text style={{color:"black",fontWeight:"bold"}}>Lorem Ipsum is simply dummy  Lorem Ipsum
         has been the industry's standard dummy text ever since the 1500stext of the printing.</Text>

      </View>
      </View>
      <View style={{position:"relative",left:"75%",marginTop:25}}>
      <TouchableOpacity onPress={()=>navigation.navigate('pages')}>
        <Icon name="rightcircle" size={60} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default getStarted;
