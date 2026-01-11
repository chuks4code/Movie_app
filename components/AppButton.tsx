import Colors from "@/constants/colors";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet, Text,
  View,
  ViewStyle,
} from "react-native";

/*reusable app button  */
  /*Interface is only used in typescript */
  interface AppButtonProps {
        mytitle: string;
        myicon?: any;
        mystyle?: StyleProp<ViewStyle>;
        onPress?: () => void;
        disabled?: boolean;
        }

const AppButton = ({mytitle,onPress , myicon, mystyle, disabled=false}:AppButtonProps) => {
      
return (
    <Pressable
      style={({ pressed }) => [styles.containerButton,{ opacity: pressed ? 0.6 : 1 },mystyle ]}
      onPress={() => {
        console.log("Button pressed");
      }}
    >
        <View style={{flexDirection: "row"}}>
            <Text style = {{color:Colors.text, fontWeight: "600" , marginRight: 0,}}>
                        {mytitle }
            </Text>
            {myicon}
        </View>
      
    </Pressable>
  );
}

export default AppButton

const styles = StyleSheet.create({

  containerButton : {
        height:45,
        width: 140,
         borderWidth: 1,
        borderColor: "#202020",
        borderRadius: 10, 
        marginRight: 14,
        paddingHorizontal: 10,
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "center",
       
 }
})