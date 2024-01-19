import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

function MessagePage() {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex flex-col h-screen flex-1 bg-gray-900">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="group flex items-start space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-gray-800 text-gray-200 rounded-lg p-3">
              <p className="font-semibold">John Doe</p>
              <p>Hello! How can I assist you today?</p>
            </div>
          </div>
          <div className="group flex items-start space-x-3 justify-end">
            <div className="bg-gray-800 text-gray-200 rounded-lg p-3">
              <p className="font-semibold">Alice Morgan</p>
              <p>
                Thanks, John. I'm looking for some information on the new
                product line.
              </p>
            </div>
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
          <div className="group flex items-start space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-gray-800 text-gray-200 rounded-lg p-3">
              <p className="font-semibold">John Doe</p>
              <p>Sure, Alice. I'd be happy to help with that.</p>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="border-t border-gray-800">
            <div className="px-4 py-3 bg-blue-900">
              <div className="flex items-center space-x-3">
                <Input
                  className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2"
                  placeholder="Type your message"
                />
                <Button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
