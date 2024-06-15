import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon3 from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [isPressed, setIsPressed] = useState(null);
  console.log("useState",isPressed)
  const itemsArray = [
    "shirts",
    "Mobile",
    "Electronics",
    "Books",
    "fashion"
  ]
  const CardsArray = [
    {
      title:"Free Fashion Stock3",
      imageUrl:"https://repository-images.githubusercontent.com/131326135/80d87300-d269-11eb-9bc3-309297c3fe04"

    },
    {
      title:"Free Fashion Stock1",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57Wb5sfXD3_r6C9oDEfGmEMzyKZgL_QHEMCZxFgl0Cw&s"
    },
    {
      title:"Free Fashion Stock2",
      imageUrl:"https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg"
    },
    {
      title:"Free Fashion Stock4",
      imageUrl:"https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
    },
    {
      title:"Free Fashion Stock5",
      imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20210609/pngtree-3d-render-online-shopping-with-mobile-and-bag-image_727266.jpg"
    },
  ]
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",margin:16}}>
        <View><Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Welcome</Text></View>
        <View>
    <View style={{backgroundColor:"#B6D0E2",padding:10,borderRadius:100}}>
    <Icon  name="bell" size={25} color="#0096FF" />
    </View>
        </View>
      </View>
   <View  style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        placeholderTextColor="#666"
      />
       <Icon3 name="search1" size={20} color="#000" style={styles.icon} />
    </View>
    {/*  */}
    <View style={{height:100}}>
    <ScrollView horizontal={true} >
   <View style={{flexDirection:"row",marginTop:20,height:20}}>
   {
      itemsArray.map((elem,index)=>{
        return <>
        <TouchableOpacity  onPressOut={()=>setIsPressed(null)} onPress={()=>setIsPressed(index)} style={{borderWidth:1,color:"white", borderColor:isPressed === index ? "black" :"gray",width:70,height:10,height:40,marginLeft:25,alignItems:"center",borderRadius:20}}>
         <Text style={{color:isPressed === index ? "black" :"gray",margin:10}} >{elem}</Text>
         </TouchableOpacity>
         
         </>
      })
    }
   
   </View>
   </ScrollView>
    </View>
   {/*  */}
   <View style={{flexDirection:"row",gap:20,justifyContent:"center",alignItems:"center",borderRadius:20,backgroundColor:"black",marginLeft:10,marginRight:10}}>
<View style={{gap:10}}>
<Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:15}} >Get Your Special</Text>
<Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:20}} >sale upto 50%</Text>
<TouchableOpacity  style={{borderRadius:25,backgroundColor:"orange",height:40,justifyContent:"center",alignItems:"center",width:100}}>
     <Text style={{color:"white"}}>Buy now</Text>
 </TouchableOpacity>

</View>
<Image
          style={{ height: 200,width:"50%" }}
          resizeMode='cover'
          source={{uri:"https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg"}}
        />
  </View>  
   {/*  */}
   <View style={{marginTop:10}}> 
<ScrollView horizontal={true}>
<View style={{flexDirection:"row"}}>
 {
    CardsArray.map((item,index)=>{
      const {title,imageUrl} = item
      return <>
    <View style={{marginLeft:20,borderRadius:20,margin:7,
   width:170,justifyContent:"center",backgroundColor:"white",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5
   }}>
   <View style={{gap:80,alignItems:"center",justifyContent:"center"}} >
   <Image
          style={{ height: 100, width: "100%" }}
          resizeMode='cover'
          source={{uri:imageUrl}}
        />
        <Text style={{color:"black",textAlign:"center",paddingBottom:30}}>{title}</Text>
   </View>
   </View>  
      </>
    })
   }
 </View>
</ScrollView>
  </View>
{/*  */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    margin:10,
    marginLeft:10,
    marginRight:10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});




export default Home