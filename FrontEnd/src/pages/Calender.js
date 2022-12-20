import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import enLocale from "date-fns/locale/en-IN";

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Date is: ", date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
            <div style={{ background: "#FFEEFF", padding: "8px 16px", height: "320px", overflow: "hidden" }}>
                <Calendar date={selectedDate} onChange={handleDateChange} />
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default Calender

