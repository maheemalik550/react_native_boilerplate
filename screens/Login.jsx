import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';


const Login = () => {
  const navigation = useNavigation()
  return (
   <View style={{flex:1,backgroundColor:"#2E3192"}}>
    {/* icon */}
    <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{backgroundColor:"black",padding:10,width:50,marginLeft:14,marginTop:12,borderTopRightRadius:20,borderBottomLeftRadius:20}} >
    <Icon  name="arrowleft" size={22} color="white" />
    </TouchableOpacity>
    {/* image */}
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image
          style={{ height: 200,width:"50%" }}
          resizeMode='cover'
          source={require('../assests/pic1.png')}
        />
    </View>
    {/* signup form */}
    <View style={{flex:1,backgroundColor:"white",borderTopRightRadius:70,borderTopLeftRadius:70}}>
    <ScrollView>
    <View style={{marginTop:20}}>
    <Text style={{fontSize:20,marginLeft:40,fontWeight:"bold",color:"black"}}>Login:</Text>
      <View style={{padding:20}}>
        <Text style={{color:"black",paddingLeft:2}}>email:</Text>
        <TextInput 
        style={{borderWidth:1,padding:10,borderColor:"gray",borderRadius:10}}
        placeholder='enter you email '/>
      </View>
      <View style={{padding:20}}>
        <Text style={{color:"black",paddingLeft:2}}>password:</Text>
        <TextInput 
        style={{borderWidth:1,padding:10,borderColor:"gray",borderRadius:10}}
        placeholder='enter you password '/>
      </View>
  {/* login button */}
  <View style={{alignItems:"center"}}>
  <TouchableOpacity onPress={()=>navigation.navigate('Home')}  style={{borderRadius:25,backgroundColor:"black",height:70,justifyContent:"center",alignItems:"center",width:200}}>
     <Text style={{color:"white"}}>Login</Text>
 </TouchableOpacity>
 </View>
 {/* icons */}
 <View style={{flexDirection:"row",gap:10,justifyContent:"center",alignItems:"center",marginTop:20}}>
 <Icon2  name="google" size={30} color="#b2244c" />
<Icon1  name="facebook" size={30} color="#0000FF" />
 </View>
     </View>
    </ScrollView>
    </View>
   </View>
  )
}

export default Login