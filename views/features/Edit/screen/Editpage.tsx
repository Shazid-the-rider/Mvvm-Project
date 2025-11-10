import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Textwrite from "../components/Textwrite";
import useLogic from "../../../../viewmodels/useLogic";
import { useState } from "react";
import useEditPageLogic from "../../../../viewmodels/useEditPageLogic";


export default function Editpage() {

    const { message, setMessage, title, setTitle, navigation, AddTask, EditTask } = useEditPageLogic();


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>

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

                <Textwrite
                    title={title}
                    setTitle={setTitle}
                    message={message}
                    setMessage={setMessage}
                />

                <TouchableOpacity
                    onPress={async () => {
                        if (title.trim() === "" || message.trim() === "") {
                            return;
                        }
                        try {
                            // console.log('Adding task:', { title, message });
                            await AddTask(title, message);
                            setMessage("");
                            setTitle("");
                            navigation.goBack();
                        } catch (error) {
                            console.error('Error saving task:', error);
                        }
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

const styles = StyleSheet.create({
    button: {
        zIndex: 1000, position: 'absolute', top: 10, left: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'
    },
    button1: {
        zIndex: 1000, position: 'absolute', bottom: 50, right: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'black', gap: 2, paddingHorizontal: 40, paddingVertical: 7, borderRadius: 50,
    }
})