import { useEffect, useState } from "react";
import useLogic from "./useLogic";

export default function useSearchLogic() {
    const { allTask } = useLogic();
    const [searchText, setSearchText] = useState<string>("");
    const { setFilter } = useLogic();

    useEffect(() => {
        const lowerSearch = searchText.toLowerCase();
        const fil = allTask.filter(
            (item) =>
                item.title.toLowerCase().includes(lowerSearch) ||
                item.text.toLowerCase().includes(lowerSearch)
        );
        setFilter(fil);
    }, [searchText, allTask]);

    return{searchText,setSearchText}
}