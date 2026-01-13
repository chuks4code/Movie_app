import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/colors";
import OverviewSection from "@/components/OverviewSection";
import HeaderSection from "@/components/HeaderSection";





const HomeScreen = () => {
return (
    <View style={styles.containerr}>
           <ScrollView>
                <OverviewSection/>
               <HeaderSection title="Trending now 🔥 " actionTextRight="See More" />
               
            </ScrollView>
    </View>
)
}

export default HomeScreen

const styles = StyleSheet.create({
    containerr:{
        flex:  1,
        backgroundColor: Colors.background,

    },
   
})