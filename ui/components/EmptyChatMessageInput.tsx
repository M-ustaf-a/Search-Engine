import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Attach, CopilotToggle, Focus } from "./MessageInputActions";
import { ArrowRight, Search } from "lucide-react";

const EmptyChatMessageInput = ({
  sendMessage,
  focusMode,
  setFocusMode,
}: {
  sendMessage: (message: string) => void;
  focusMode: string;
  setFocusMode: (mode: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const [copilotEnabled, setCopilotEnabled] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }
      }}
      className="w-full"
    >
      <div className="flex flex-col bg-[#111111] px-5 pt-5 pb-2 rounded-xl w-full border border-white">
        <div className="flex flex-row mr-3">
        <TextareaAutosize
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minRows={2}
          className="bg-transparent placeholder:text-white/70 text-sm text-white resize-none focus:outline-none w-full max-h-24 lg:max-h-36 xl:max-h-48"
          placeholder="Search AI"
        />
            <button
              disabled={message.trim().length === 0}
              className="bg-white text-black disabled:text-white/70 hover:bg-opacity-85 transition duration-100 disabled:bg-[#ececec21] rounded-full p-2 size-10"
            >
              {/* <ArrowRight size={17} /> */}
              <Search/>
            </button>
        </div>
        
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-1 -mx-2">
            <Focus focusMode={focusMode} setFocusMode={setFocusMode} />
            <Attach />
          </div>
          <div className="flex flex-row items-center space-x-4 -mx-2">
            {/* <CopilotToggle
              copilotEnabled={copilotEnabled}
              setCopilotEnabled={setCopilotEnabled}
            /> */}
            {/* <button
              disabled={message.trim().length === 0}
              className="bg-[#24A0ED] text-white disabled:text-white/50 hover:bg-opacity-85 transition duration-100 disabled:bg-[#ececec21] rounded-full p-2"
            >
              <ArrowRight size={17} />
              <Search/>
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmptyChatMessageInput;
