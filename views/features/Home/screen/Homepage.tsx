import { Text, TouchableOpacity, View } from "react-native";

import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Object } from "../../../../models/DataModel";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Search from "../components/Search";
import Message from "../components/Message";
import useLogic from "../../../../viewmodels/useLogic";
import List from "../components/List";



type RootStackParamList = {
  HomeMenu: undefined;
  EditMenu: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function Homepage(){
    const navigation = useNavigation<NavigationProp>();
    const {allTask,DeleteTask}= useLogic();
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
         <Search/>
         {
          allTask.length<=0 &&(
            <Message/>
          )
         }
         {
          allTask.length>0&&(
           <List/>
          )
         }
         <TouchableOpacity 
            onPress={() => {
              console.log('Button pressed');
              navigation.navigate('EditMenu');
            }}
            activeOpacity={0.7}
            style={{
              zIndex: 1000,
              position: 'absolute',
              bottom: 40,
              right: 20,
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
          >
            <MaterialCommunityIcons name="pencil-circle" size={60} color="black" />
         </TouchableOpacity>
        </View>
    )
}