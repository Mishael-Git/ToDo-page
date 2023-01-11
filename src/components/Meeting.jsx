import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Meeting() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Meetings</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
}

export default Meeting;
