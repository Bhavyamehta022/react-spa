import { LiveChat } from "./LiveChat";
import {ChatWindow} from "./ChatWindow";
export const LiveStream = () => {
  return (
    <div className = "livContainer">
        <LiveChat/>
        <ChatWindow/>
    </div>
  );
};
