import { useContext, useState } from "react";
import { dateObj, Object } from "../models/DataModel";
import { GlobalContext } from "../context/GlobalContext";
import useDate from "./useDate";

export default function useLogic() {

    const context = useContext(GlobalContext);

    if (!context) throw new Error("useLogic must be used inside GlobalProvider");
    const { allTask, setAllTask, text, setText, header, setHeader, idNo, setIdno, filter, setFilter, saveTasks } = context


    //Add task :
    const AddTask = async (title: string, message: string): Promise<void> => {
        if (title.trim() === "" || message.trim() === "") {
            console.log("Cannot add empty task");
            return;
        }
        const { dayName, bar, monthName, year, hours, minute, ampm } = useDate();
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

        const newList = [newTask, ...allTask];
        setAllTask(newList);
        try {
            await saveTasks(newList);
        } catch (error) {
            console.error('Error saving task:', error);
        }
    }

    //Delete Task
    const DeleteTask = async (id: number): Promise<void> => {

        const filteredTasks = allTask.filter((item) => item.id !== id);
        setAllTask(filteredTasks);
        try {
            await saveTasks(filteredTasks);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

    //Edit Task
    const EditTask = async (id: number, head: string, body: string): Promise<void> => {
        const { dayName, bar, monthName, year, hours, minute, ampm } = useDate();
        const newTime: dateObj = {
            dayName,
            bar: bar.toString(),
            monthName,
            year,
            hours: hours.toString(),
            minute: minute.toString(),
            ampm,
        }

        const updatedTasks = allTask.map((item) =>
            item.id === id ? { ...item, title: head, text: body, date: newTime } : item
        );
        setAllTask(updatedTasks);
        try {
            await saveTasks(updatedTasks);
        } catch (error) {
            console.error('Error editing task:', error);
        }
    }

    return { AddTask, DeleteTask, EditTask, allTask, setAllTask, text, setText, header, setHeader, idNo, setIdno, filter, setFilter, saveTasks }

}