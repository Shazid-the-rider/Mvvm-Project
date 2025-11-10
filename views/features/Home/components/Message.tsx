import { Dimensions, Text, View } from "react-native";
const height=Dimensions.get('window').height;
export default function Message(){
    return(
        <View style={{height:height/1.5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:17, fontWeight:500, color:'rgba(106, 105, 105, 0.93)'}}>কোনো নোট নেই ...</Text>
        </View>
    )
}