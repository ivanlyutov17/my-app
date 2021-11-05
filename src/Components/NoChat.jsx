import { Chatslist } from "./Chatslist"
export const NoChat = ({ chats }) => (
    
    <>
        <Chatslist chats={chats} />
        <span>Please select a chat</span>
    </>
)