import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import Colors from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
const router = useRouter();
const [showPassword, setShowPassword] = useState(false);

return (
    <SafeAreaView style= {{flex: 1 , backgroundColor: Colors.background }}>

        <View style = {styles.containerr}>
            <Text style = {styles.textt}>
            LoginScreen
            </Text>
            
        <View style = {styles.inputWrapper}>
                <AppTextInput placeholder = "Your Email" />
                <AppTextInput placeholder = "Password" secureTextEntry={!showPassword} onTogglePassword={() => setShowPassword(!showPassword)}/>
                    <Text style= {styles.forgottext}> Forgot Password?</Text>
        </View>

            {/* customized button */}
            <AppButton onPress={() => router.push("/(tabs)/(home)")} mytitle="Login" mystyle={{backgroundColor: Colors.primary, width: "100%", height: 50 ,marginRight: 0 }} />

            <Text style={styles.createAccounText}>
                No Account?     
                <Text onPress={()=> router.push("/sign-up")} style={{color: Colors.primary}}> Register Here</Text>
            </Text>

        </View>

        

    </SafeAreaView>
)
}

export default LoginScreen

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

    },

    forgottext:{
        fontSize: 12,
        color: Colors.gray,
        alignSelf: "flex-end",
    }


})