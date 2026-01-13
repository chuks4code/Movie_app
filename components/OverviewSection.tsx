import Colors from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, View , Text, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";





const OverviewSection = () => {
return (
    <View style={styles.overview}>
        <Image style={styles.overviewImage} source={require("@/assets/images/overview.png")}/>

        {/* /*<OverviewCover/>*/ }
        <View style={styles.overviewCover}>

             <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={{flexDirection: "row",  }}>
                        <Image style={styles.profile}  source={require("@/assets/images/profile.jpg")}/>

                     

                        <View>
                            <Text style={styles.greetings}> Hi, Chuks 🖐</Text>
                            <Text style={{color:Colors.text, fontSize: 16}}>Welcome back</Text>
                        </View>
                    </View>

                    <Pressable style={styles.searchWrapper} >
                        <Ionicons name="search" size={24} color="#000" />
                    </Pressable>
                </View>

                <LinearGradient
                    colors={["transparent", Colors.background]} style={styles.gradient}
                >
                    <View style={styles.categoryBadge}>
                        <Text style={{color: Colors.text, fontSize: 13, fontWeight: "500"}}>Series</Text>
                    </View>

                    <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-between", padding:10 }}>
                        <Text numberOfLines={1} style={{color: Colors.text, fontSize: 26, fontWeight: "600"}}>The Sandman</Text>

                       <Pressable
                            style={({ pressed }) => [styles.playbtn, pressed && { opacity: 0.8 },]}
                            >

                            <Ionicons name="play" size={24} color="#faf9f9" />
                        </Pressable>
                        
                    </View>
                     <Text numberOfLines={1} style={{color: Colors.gray, paddingLeft: 10 }}>2025 | Monster Horror | Sci-fi Epic</Text>

                </LinearGradient>

            </SafeAreaView>

                       

        </View>
    </View>
)
}

export default OverviewSection

const styles = StyleSheet.create({

    overview: {
        height: 400,
        position: "relative",
    },
    overviewImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    overviewCover:{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
    },

    header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 14,

    },

    profile: {
        height: 45, 
        width: 45,
        borderRadius: 50, 
        marginRight: 8,
    },
    greetings: {
        color:Colors.text,
        fontWeight: "600",
        fontSize: 20,
    },

    searchWrapper:{
        height: 50,
        width: 50,
        borderRadius:50 ,
        backgroundColor: "#535456",
        alignItems: "center",
        justifyContent: "center",
    },
     gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,            // ✅ enough room for all hero text
        paddingTop: 10,
        paddingBottom: 9,
        justifyContent: "flex-end",
        },


     categoryBadge:{
        padding: 4,
        marginLeft: 10,
        backgroundColor:Colors.surface,
        borderRadius: 20,
        alignItems: "center",
        width: 100,
        height: 28,

     },

     playbtn: {
         width: 50,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
          backgroundColor:Colors.surface,
     },

})