import Navbar from "./Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

//TODO - Fix styling, add buttons for events.

function CalendarPage() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex gap-8 p-8">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          className="h-[700px] w-[1000px]"
        />
        <div className="flex flex-col h-full w-[500px] justify-center items-center border-2"></div>
      </main>
    </div>
  );
}

export default CalendarPage;
