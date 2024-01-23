import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Message from "./Message";

function MessagePage() {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex flex-col h-screen flex-1 bg-gray-900">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <Message
            sender="John Doe"
            content="Hello! How can I assist you today?"
            imgSrc="/placeholder-avatar.jpg"
            alt="JD"
            receiver={false}
          />
          <Message
            sender="Alice Morgan"
            content="Thanks, John. I'm looking for some information on the new product line."
            imgSrc="/placeholder-avatar.jpg"
            alt="AM"
            receiver={true}
          />
          <Message
            sender="John Doe"
            content="Sure, Alice. I'd be happy to help with that."
            imgSrc="/placeholder-avatar.jpg"
            alt="JD"
            receiver={false}
          />
          <Message
            sender="John Doe"
            content="Here's a link to the product page: https://example.com"
            imgSrc="/placeholder-avatar.jpg"
            alt="JD"
            receiver={false}
          />
        </div>
        <div className="flex-none">
          <div className="border-t border-gray-800">
            <div className="px-4 py-3">
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
