import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import useLogic from "./useLogic";

export default function useTaskPageLogic() {

        const [message, setMessage] = useState<string>("");
        const [title, setTitle] = useState<string>("");
        const navigation = useNavigation();
        const { AddTask, EditTask, text, setText, header, setHeader, idNo } = useLogic();
        useEffect(() => {
                setMessage(text);
                setTitle(header);
        }, []);

        return{AddTask, EditTask, text, setText, header, setHeader, idNo,message, setMessage,title, setTitle,navigation}

}