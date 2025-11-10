import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { dateObj, Object } from '../models/DataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GlobalContextType {
    allTask: Object[];
    setAllTask: (tasks: Object[]) => void;
    
    text:string;
    setText:(text:string)=>void;

    header:string;
    setHeader:(text:string)=>void;

    idNo:number|undefined;
    setIdno:(id:number|undefined)=>void;
    
    filter:Object[];
    setFilter:(item:Object[])=>void;

    saveTasks: (tasks: Object[]) => Promise<void>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [allTask, setAllTask] = useState<Object[]>([]);
    const [text,setText]= useState<string>("");
    const [header,setHeader]= useState<string>("");
    const [idNo,setIdno]= useState<number|undefined>(undefined);
    const [filter,setFilter] = useState<Object[]>([]);

    const TASKS_KEY = '@all_tasks';

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
                if (jsonValue != null) {
                    const tasks: Object[] = JSON.parse(jsonValue);
                    setAllTask(tasks);
                }
            } catch (e) {
                console.log('Error loading tasks from storage:', e);
            }
        };
        loadTasks();
    }, []);

    const saveTasks = async (tasks: Object[]) => {
        try {
            await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
        } catch (e) {
            console.log('Error saving tasks:', e);
        }
    };

   

    return (
        <GlobalContext.Provider value={{allTask, setAllTask,text, setText,header, setHeader,idNo, setIdno,filter, setFilter,saveTasks}} >
            {children}
        </GlobalContext.Provider>
    );
};
