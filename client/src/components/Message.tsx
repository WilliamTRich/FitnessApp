import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  sender: string;
  content: string;
  imgSrc: string;
  alt: string;
  receiver: boolean;
}

function Message({ sender, content, imgSrc, alt, receiver }: MessageProps) {
  return (
    <div
      className={`group flex items-start space-x-3 ${
        receiver ? "justify-end" : ""
      }`}
    >
      <Avatar className="h-9 w-9">
        <AvatarImage alt={alt} src={imgSrc} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <div className="bg-gray-800 text-gray-200 rounded-lg p-3">
        <p className="font-semibold">{sender}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Message;
