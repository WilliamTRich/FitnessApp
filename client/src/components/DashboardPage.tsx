import Navbar from "./Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DailyTask from "./DailyTask";

function DashboardPage() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex py-10 flex-1 justify-evenly">
        <ScrollArea className="h-screen w-2/5 rounded-md border-2 p-4">
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
          <div className="flex-1 border-2 rounded-md"></div>
          <div className="flex-1 border-2 rounded-md"></div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
