import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useLogic from "../../../../viewmodels/useLogic";
import { useEffect, useState } from "react";
import useSearchLogic from "../../../../viewmodels/useSearchLogic";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Search() {

    const { searchText, setSearchText } = useSearchLogic();

    return (
        <View style={{ width: width, paddingTop: 15, alignItems: 'center' }}>
            <View style={{ width: width * .92, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 15 }}>
                <Text style={{ fontSize: 35, fontWeight: 700, color: 'rgba(0, 0, 0, 1)' }}>Note</Text>
            </View>
            <View style={{ width: width * .92, display: 'flex', flexDirection: 'row', gap: 5, paddingVertical: 8, alignItems: 'center', borderColor: 'rgba(230, 227, 227, 0.92)', borderWidth: 1, borderRadius: 8 }}>
                <EvilIcons name="search" size={35} color="black" />
                <TextInput
                    placeholder="search here"
                    value={searchText}
                    placeholderTextColor='rgba(132, 131, 131, 0.93)'
                    style={{
                        width: '80%',
                        fontSize: 18,
                        fontWeight: 600
                    }}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
        </View>
    )
}