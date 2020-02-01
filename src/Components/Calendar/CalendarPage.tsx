import React from 'react'
import NiliCalendar from './'


const CalendarPage: React.FC<any> = (props: any) => {

    return (
        <div style={{position: "relative"}}>

            <NiliCalendar calendar={true} header={"./images/calendar/bahman.jpg"}/>
        </div>
        )
}

export default CalendarPage