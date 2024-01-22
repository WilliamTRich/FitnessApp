import Navbar from "./Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./styles/calendar.scss";
import AddCalendarEvent from "./AddCalendarEvent";

const localizer = momentLocalizer(moment);

//TODO - Add baseline for events, set up props.

function CalendarPage() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex gap-8 p-8">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          toolbar={false}
          className="h-[700px] w-[1000px]"
        />
        <div className="flex flex-col h-[700px] w-[500px] justify-evenly items-center border-2 rounded-lg">
          <AddCalendarEvent
            buttonText="Add a Workout"
            title="Workout"
            description="Add a workout, go over specifics!"
            label="Workout"
          />
          <AddCalendarEvent
            buttonText="Add an Event"
            title="Event"
            description="Add a life event, go over specifics!"
            label="Event"
          />
          <AddCalendarEvent
            buttonText="Add a Meal"
            title="Meal"
            description="Add a meal plan, go over specifics!"
            label="Meal"
          />
        </div>
      </main>
    </div>
  );
}

export default CalendarPage;
