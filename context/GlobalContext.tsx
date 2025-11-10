import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { dateObj, Object } from '../models/DataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GlobalContextType {
    allTask: Object[];
    setAllTask: (tasks: Object[]) => void;
    //AddTask: (title: string, message: string) => void;
    //DeleteTask: (id: number) => void;
    //EditTask: (id: number) => void;
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

   /* const AddTask = (title: string, message: string): void => {

        if (title.trim() === "" || message.trim() === "") {
            console.log("Cannot add empty task");
            return;
        }

        const now = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dayName = days[now.getDay()];
        const bar = now.getDate();
        const monthName = months[now.getMonth()];
        const year = now.getFullYear().toString().slice(2);
        let hours = now.getHours();
        const minute = now.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;

        const newTime: dateObj = {
            dayName,
            bar: bar.toString(),
            monthName,
            year,
            hours: hours.toString(),
            minute: minute.toString(),
            ampm,
        }

        const newTask: Object = {
            id: Date.now(),
            title: title.trim(),
            text: message.trim(),
            date: newTime
        }

        setAllTask(prev => {
            const newList = [newTask, ...prev];
            return newList;
        });
        const updatedTasks = [newTask, ...allTask];
        saveTasks(updatedTasks);
    }*/

    /*const DeleteTask = (id: number): void => {
        const Filtered = allTask.filter((item) => item.id !== id);
        setAllTask(Filtered);
        saveTasks(Filtered);
    }
    const EditTask = (id: number,head:string,body:string):void=> {
        
        setAllTask((prev)=>prev.map((item)=>item.id===id?{...item,title:head,text:body}:item)); 
        const updatedTasks = allTask.map((item)=>item.id===id?{...item,title:head,text:body}:item)
        saveTasks(updatedTasks);
    } */

    return (
        <GlobalContext.Provider value={{allTask, setAllTask,text, setText,header, setHeader,idNo, setIdno,filter, setFilter,saveTasks}}
/*value={{ allTask, AddTask, DeleteTask,filter,setFilter, EditTask,text,setText,header,setHeader,idNo,setIdno}}*/ >
            {children}
        </GlobalContext.Provider>
    );
};
