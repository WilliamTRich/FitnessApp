import Navbar from "./Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DailyTask from "./DailyTask";
import CalorieChart from "./CalorieChart";
import AddYearGoal from "./AddYearGoal";

//TODO - Loop through daily tasks, fix calorie chart, loop through yearly goals.

function DashboardPage() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex py-10 flex-1 justify-evenly">
        <ScrollArea className="h-[900px] w-2/5 rounded-md border-2 p-4">
          <h1 className="flex flex-col w-full text-center text-2xl mb-4">
            Today's Tasks
          </h1>
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
          <DailyTask
            title="Walk the Dogs"
            description="Need to walk the dogs on the trail outside of the house."
            time="3:30-4:00 PM"
          />
        </ScrollArea>
        <div className="flex flex-col w-2/5 gap-6">
          <div className="flex-1 flex flex-col items-center justify-center border-2 rounded-md">
            <h1 className="text-3xl font-md">Daily Calories</h1>
            <CalorieChart />
          </div>
          <div className="flex-1 flex flex-col gap-6 p-6 border-2 rounded-md">
            <nav className="flex w-full justify-evenly">
              <h1 className="text-3xl font-md">Yearly Goals</h1>
              <AddYearGoal />
            </nav>
            <ul className="flex flex-col gap-4 list-disc ml-4">
              <li className="text-primary">
                <h1 className="text-2xl font-md">
                  Work out 280 days of the year.
                </h1>
                <p className="font-md ml-4">
                  Work out, Monday-Friday consistently for the entire year.
                </p>
              </li>
              <li className="text-primary">
                <h1 className="text-2xl font-md">Eat healthy</h1>
                <p className="font-md ml-4">
                  Eat low density foods, and maintain high calorie intake for
                  the entire year.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
