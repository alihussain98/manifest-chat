import React, { useContext } from "react";
import './Chat.css';
import { ChatContext } from './ChatContext';
import { Button } from '@material-ui/core';
import chatdp from './images/61.png';
import wait from './images/Wait.png';
import edit from './images/edit.png';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function Chat() {
    const { messages, userClickedYes, userSelectedDate, userClickedNo, deleteMessages, isLoading, showUserInput, confirmClicked } = useContext(ChatContext);
    const yesMessages = ['Yes, I do!', 'Yes', 'Active'];
    const noMessages = ['No', 'Not Really', 'Passive'];
    const userMessageCount = messages.reduce((count, message) => {
        if (!message.isAdmin) {
            count++;
        }
        return count;
    }, 0);


    return (
        <div className="chats">
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

            {showUserInput
                ? userMessageCount < 3
                    ? <div className="choice_pg1">
                        <div className="choice1">
                            <Button onClick={() => userClickedYes(yesMessages[userMessageCount])}> {yesMessages[userMessageCount]} </Button>
                        </div>
                        <div className="choice2">
                            <Button onClick={() => userClickedNo(noMessages[userMessageCount])}> {noMessages[userMessageCount]} </Button>
                        </div>
                    </div>
                    : userMessageCount === 3
                        ?
                        <div className="date_picker">
                            <DayPicker onDayClick={userSelectedDate} />
                        </div>
                        : userMessageCount > 3
                            ?
                            <div className="confirm_button">
                                <Button onClick={confirmClicked}>Confirm</Button>
                            </div>
                            : null
                : null
            }
        </div >
    )
}

export default Chat
