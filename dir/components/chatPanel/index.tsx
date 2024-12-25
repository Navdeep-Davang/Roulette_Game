import { Send } from 'lucide-react';
import React from 'react';

const ChatPanel = () => {
  return (
    <div className= "h-full w-full p-2 chatbox-panal flex-col items-start inline-flex">
      {/* Chatbox Title */}
      <div className="chatbox-title self-stretch p-2 rounded justify-between items-center inline-flex">
        <div className="chatbox-title-text w-16 h-6 text-base cursor-default">
          Chatbox
        </div>
        <div className="justify-start items-center gap-4 flex">
          <div className="status-indicator w-2 h-2 rounded" />
          <div className="status-text text-white text-base">
            0
          </div>
        </div>
      </div>

      {/* Chat Content */}
      <div className="h-full w-full bg-amber-300 " />

      {/* Chatbox Footer */}
      <div className="chatbox-footer w-full p-2 pl-3 gap-2 rounded justify-between items-center inline-flex">
        <div className="status-info-text justify-center text-xs">
          You must be logged in to chat.
        </div>
        <div className="p-1.5 send-bg cursor-pointer rounded-full flex-col justify-center items-center inline-flex">
          <Send />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
