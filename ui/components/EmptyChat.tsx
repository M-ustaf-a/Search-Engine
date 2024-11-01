import { Earth, Globe } from "lucide-react";
import EmptyChatMessageInput from "./EmptyChatMessageInput";

const EmptyChat = ({
  sendMessage,
  focusMode,
  setFocusMode,
}: {
  sendMessage: (message: string) => void;
  focusMode: string;
  setFocusMode: (mode: string) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen mx-auto p-2 space-y-8">
      <h2 className="text-white text-6xl font-medium -mt-8">
      <div className="flex gap-1">
        <h1>Ai</h1>
        <Globe size={50}/>
      </div>
      </h2>
      <EmptyChatMessageInput
        sendMessage={sendMessage}
        focusMode={focusMode}
        setFocusMode={setFocusMode}
      />
    </div>
  );
};

export default EmptyChat;
