import style from "./NewChat.module.css"
interface NewChatProps {
    setNewChat: (value: boolean) => void;
}

const NewChat:React.FC<NewChatProps> = ({setNewChat}) => {

    const handleSetNewChat = () => {
        setNewChat(true);
    }
    return(
        <>
            <button className={style. buttonStyle} onClick={handleSetNewChat}>New Chat</button>
        </>
    )
}

export default NewChat;