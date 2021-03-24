import React, { useState, useEffect } from "react";
import './Chat.css'
import { Button } from '@material-ui/core'
import chatdp from './images/61.png'
import wait from './images/Wait.png'


function Chat() {

    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading)

    const [messages, setMessages] = useState([
        { message: "Hi! I am Henry, your personal transfer specialist.", id: 1 },
        { message: "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!", id: 2 },
        { message: "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?", id: 3 }
    ]);

    useEffect(() => {
        setTimeout(() => {
            //setisLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return (
            <div className="loading_animations">
                <img className="loading" src={wait} alt="wait" />
            </div>
        )
    } else {
        return (
            <div className="chats">
                {messages.map(message => (
                    <div className="chats_room" key={message.id} >
                        <div className="dp">
                            <img className="chat_dp" src={chatdp} alt="chat_dp" />
                        </div>
                        <div className="chat_text">
                            <p className="chat_message">{message.message}</p>
                        </div>
                    </div>
                ))}

                <div className="choice_pg1">
                    <div className="choice1">
                        <Button> Yes </Button>
                    </div>
                    <div className="choice2">
                        <Button> No </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
