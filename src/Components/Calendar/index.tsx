import React from 'react';
import DatePicker from "./Georgian/DatePicker/DatePicker"

const Calendar: React.FC<any> = (props: any) => {

    return (
        <div >

           <input type="date" />
           <DatePicker theDate= {new Date()} headerImage={"./images/calendar/bahman.jpg"} />
        </div>
        )
}

export default Calendar