import { StyleSheet, Text, TextInput, View , Pressable,TextInputProps} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import {Ionicons} from "@expo/vector-icons"



type AppTextInputProps = TextInputProps & {
  onTogglePassword?: () => void;
};


/*reusable text input  */
/*reuseable TextInput */
const AppTextInput = ({secureTextEntry,
  onTogglePassword,...props}: AppTextInputProps) => {

return (
    <View style= {styles.wrapper}>
       
            <TextInput style={styles.inputt} {...props}  secureTextEntry={secureTextEntry} placeholderTextColor={Colors.placeholdertextcolor} />

            {onTogglePassword && (
        
            <Pressable onPress={onTogglePassword}>
                <Ionicons
                    name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
                    size={22}
                     color={Colors.text}
                />          
            </Pressable>
      )}
       

    </View>
)
}

export default AppTextInput

const styles = StyleSheet.create({

    wrapper: {
        height:50,
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.darkBorder,
        borderRadius: 8, 
        backgroundColor: "#131313",
        paddingHorizontal: 10,
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,

    },
    inputt: {
        flex: 1,
        color: Colors.primary,
    }
});