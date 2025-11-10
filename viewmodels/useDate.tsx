export default function useDate(){
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

        return{
            dayName,
            bar,
            monthName,
            year,
            hours,
            minute,
            ampm,
        }
}