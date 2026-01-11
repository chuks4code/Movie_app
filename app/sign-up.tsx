import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
    const router = useRouter();
const [showPassword, setShowPassword] = useState(false);

return (
    <SafeAreaView style= {{flex: 1 , backgroundColor: Colors.background }}>

        <View style = {styles.containerr}>
            <Text style = {styles.textt}>
            Sign Up
            </Text>
            
        <View style = {styles.inputWrapper}>
                <AppTextInput placeholder = "Your Email" />
                <AppTextInput placeholder = "Password" secureTextEntry={!showPassword} onTogglePassword={() => setShowPassword(!showPassword)}/>
        </View>

            {/* customized button */}
            <AppButton  mytitle="Create Account" mystyle={{backgroundColor: Colors.primary, width: "100%", height: 50, marginRight: 0 }} />

            <Text style={styles.createAccounText}>
                Already a member?     
                <Text onPress={()=> router.push("/(login)")} style={{color: Colors.primary}}> Log In</Text>
            </Text>

        </View>

        

    </SafeAreaView>
)
}

export default SignupScreen

const styles = StyleSheet.create({

    containerr: {
        flex: 1 , 
        padding: 16, 
        alignItems: "center", 
        justifyContent: "center",
    },
    textt: {
        fontWeight: "600", 
        color: Colors.text,
        fontSize: 26,
    },
    inputWrapper: {
        width: "100%",
        marginVertical: 26,
    },
    createAccounText:{

        color: Colors.gray,
        fontSize: 14,
        marginTop: 14,

    }


})