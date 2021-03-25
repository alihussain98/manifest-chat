import React, { useState, useEffect, useContext } from "react";
import './Chat.css';
import { ChatContext } from './ChatContext';
import { Button } from '@material-ui/core';
import chatdp from './images/61.png';
import wait from './images/Wait.png';
import edit from './images/edit.png';

function Chat() {
    const { messages, userClickedYes, deleteMessages } = useContext(ChatContext);
    const [chats, setChats] = useState('');
    const [showUserInput, setShowUserInput] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setShowUserInput(true);
        }, 3000);
    }, []);

    const userYes = (chats) => {
        setChats([
            ...messages,
            { message: "Yes, I do", id: 4, isAdmin: false }
        ]);
        userClickedYes(chats);
        setShowUserInput(false)
    }

    return (
        <div className="chats">
            {
                isLoading
                    ? <div className="loading_animations">
                        <img className="loading" src={wait} alt="wait" />
                    </div>
                    : null
            }

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

            {showUserInput
                ? <div className="choice_pg1">
                    <div className="choice1">
                        <Button onClick={() => userYes(messages)}> Yes </Button>
                    </div>
                    <div className="choice2">
                        <Button> No </Button>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Chat
