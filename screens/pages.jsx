import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const pages = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground
        style={{flex:1}}
            resizeMode='cover'
            source={{ uri: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038913.jpg?t=st=1716415055~exp=1716418655~hmac=c224009de9cc2471b6fb61a895577e418d799cd8ce29d803feff0d7180b98b95&w=740" }}>
            <View style={{alignItems:"center",gap:20,marginTop:400}}>
                <Text style={{color:"black",fontSize:20,fontWeight:"900"}}>create Account</Text>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{borderRadius:25,backgroundColor:"black",height:70,justifyContent:"center",alignItems:"center",width:200}}>
                        <Text style={{color:"white"}}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{borderRadius:25,backgroundColor:"#2E3192",height:70,justifyContent:"center",alignItems:"center",width:200}}>
                        <Text style={{color:"white"}}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default pages