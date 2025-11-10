import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import useLogic from "./useLogic";

export default function useEditPageLogic() {
    const [message, setMessage] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const navigation = useNavigation();
    const { AddTask, EditTask } = useLogic();

    return{ message,setMessage,title,setTitle,navigation,AddTask,EditTask}
}