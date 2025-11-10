import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface TextwriteProps {
    title: string;
    setTitle: (text: string) => void;
    message: string;
    setMessage: (text: string) => void;
}

export default function Change({ title, setTitle, message, setMessage }: TextwriteProps) {

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.div}>
                    <Text style={styles.font}>Title</Text>
                    <Text style={styles.font1}>0-100</Text>
                    <TextInput
                        placeholder="enter title "
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        numberOfLines={3}
                        style={[styles.input, { fontSize: 18, fontWeight: 600 }]}
                    />
                </View>
            </View>
            <View style={styles.div}>
                <Text style={styles.font}>Description</Text>
                <Text style={styles.font1}>0-100</Text>
                <TextInput
                    placeholder="enter text "
                    numberOfLines={3}
                    multiline={true}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    style={[styles.input, {height:200, fontSize: 18, fontWeight: 600 }]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width, display: 'flex', alignItems: 'center'
    },

    box: {
        width: width, display: 'flex', alignItems: 'center',
    },

    div: {
        width: width * .9, gap: 2
    },
    font: {
        fontSize: 25, fontWeight: 600, color: 'rgba(56, 56, 56, 0.93)', paddingBottom: 10
    },
    font1: {
        fontSize: 12, fontWeight: 700, color: 'rgba(77, 77, 77, 0.63)'
    },
    input: {
        borderWidth: 1, borderColor: 'rgba(210, 207, 207, 0.97)', paddingVertical: 15, paddingLeft: 10, borderRadius: 5, marginBottom: 30
    }
})