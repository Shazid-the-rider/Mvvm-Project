import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import useLogic from "../../../../viewmodels/useLogic";
import { useEffect, useState } from "react";
import Change from "../components/Change";
import useTaskPageLogic from "../../../../viewmodels/useTaskPageLogic";

export default function TaskEditScreen() {
    
   const {AddTask, EditTask, text, setText, header, setHeader, idNo,message, setMessage,title, setTitle,navigation} = useTaskPageLogic();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 ,backgroundColor:'white'}}>

                <TouchableOpacity
                    onPress={() => {
                        console.log('Button pressed');
                        navigation.goBack();
                    }}
                    activeOpacity={0.7}
                    style={styles.button}
                >
                    <Ionicons name="chevron-back-circle-sharp" size={35} color="black" />
                </TouchableOpacity>
                <View style={{ height: 60 }}></View>

                <Change
                    title={title}
                    setTitle={setTitle}
                    message={message}
                    setMessage={setMessage}
                />

                <TouchableOpacity
                    onPress={() => {
                        if (title.trim() === "" || message.trim() === "") {

                            return;
                        }
                        console.log('Adding task:', { title, message });
                        setText(text);
                        setHeader(header);
                        EditTask(idNo,title,message);
                        setMessage("");
                        setTitle("");
                        navigation.goBack();
                    }}
                    activeOpacity={0.7}
                    style={styles.button1}
                >
                    <Entypo name="save" size={24} color="white" />
                    <Text style={{ fontSize: 19, fontWeight: 600, color: 'rgba(255, 255, 255, 1)' }}>Save</Text>

                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    button1:{
        zIndex: 1000,position: 'absolute',bottom: 50,right: 20,justifyContent: 'center',alignItems: 'center',flexDirection: 'row',backgroundColor: 'black', gap: 2,paddingHorizontal: 40, paddingVertical: 7,borderRadius: 50,
   },
   button:{
        zIndex: 1000,position: 'absolute',top: 10,left: 10,justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent'
   }
    
})