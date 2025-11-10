import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import useLogic from "../../../../viewmodels/useLogic";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type RootStackParamList = {
    HomeMenu: undefined;
    EditMenu: undefined;
    ChangeMenu: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function List() {
    const { allTask, filter, DeleteTask, EditTask, text, setText, header, setHeader, idNo, setIdno } = useLogic();
    const [visibleId, setVisibleId] = useState<number | null>(null);
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={{ width: width, alignItems: 'center', paddingTop: 15 }}>
            <FlatList
                data={filter.length > 0 ? filter : allTask}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isVisible = visibleId === item.id;
                    return (
                        <TouchableOpacity
                            onLongPress={() => {
                                setVisibleId(item.id);

                            }}
                            onPress={() => setVisibleId(null)}
                        >
                            <View style={{
                                width: width * .92,
                                backgroundColor: 'white',
                                padding: 15,
                                borderRadius: 5,
                                marginVertical: 5,
                                shadowColor: "#000",
                                shadowOffset: { width: 2, height: 3 },
                                shadowOpacity: 0.15,
                                shadowRadius: 2.78,
                                elevation: 5,

                            }}>
                                <Text numberOfLines={2} style={{ width: '100%', fontSize: 28, fontWeight: 700, color: 'rgba(23, 23, 23, 0.93)', paddingBottom: 5 }}>{item.title}</Text>
                                <Text numberOfLines={2} style={{ width: '100%', fontSize: 19, color: 'rgba(0, 0, 0, 1)', textAlign: 'left' }}>{item.text}</Text>
                                <Text style={{ paddingTop: 8, width: '100%', fontWeight: 700, fontSize: 12, color: 'rgba(0, 0, 0, 1)', textAlign: 'right' }}>{item.date.dayName} - {item.date.bar} {item.date.monthName} {item.date.year}</Text>
                                <Text style={{ paddingTop: 0, width: '100%', fontWeight: 700, fontSize: 12, color: 'rgba(0, 0, 0, 1)', textAlign: 'right' }}>{item.date.hours}:{item.date.minute} {item.date.ampm}</Text>
                            </View>
                            {
                                isVisible && (
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 40, justifyContent: 'flex-end', paddingRight: 15, paddingTop: 10, paddingBottom: 10 }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setText(item.text);
                                                setHeader(item.title);
                                                setIdno(item.id);
                                                navigation.navigate('ChangeMenu');

                                            }}
                                        >
                                            <Entypo name="edit" size={20} color="green" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            DeleteTask(item.id);
                                        }}>
                                            <AntDesign name="delete" size={20} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}