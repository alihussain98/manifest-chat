import React, { useContext, useRef, useEffect } from "react";
import './Chat.css';
import { ChatContext } from './ChatContext';
import chatdp from './images/61.png';
import wait from './images/Wait.png';
import edit from './images/edit.png';

function Chat() {
    const { messages, deleteMessages, isLoading } = useContext(ChatContext);
    const chatRef = useRef();

    useEffect(() => {
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    return (
        <div className="chats" ref={chatRef}>
            {messages.map(message => (
                <div className={message.isAdmin
                    ? "chats_room"
                    : "chats_room chats_room_user"
                }
                    key={message.id} >
                    {message.isAdmin
                        ? <div className="dp">
                            <img className="chat_dp" src={chatdp} alt="chat_dp" />
                        </div>
                        : null
                    }
                    <div className="chat_text" >
                        {message.isAdmin ? null : <button className="edit_button"><img className="edit_image" src={edit} alt="edit" onClick={() => deleteMessages(message.id)} /></button>}
                        <p className={message.isAdmin ? "chat_message" : "chat_message chat_message_user"}>{message.message}</p>
                    </div>
                </div>
            ))}

            {
                isLoading
                    ? <div className="loading_animations">
                        <img className="loading" src={wait} alt="wait" />
                    </div>
                    : null
            }
        </div >
    )
}

export default Chat
