import Navbar from "./Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

function DashboardPage() {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex py-10 justify-evenly">
        <ScrollArea className="h-full w-2/5 rounded-md border-2 p-4">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
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
