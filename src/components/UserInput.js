import React, { useContext } from "react";
import { ChatContext } from '../ChatContext';
import { Button } from '@material-ui/core';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
function UserInput() {
    const { messages, userClickedYes, userSelectedDate, userClickedNo, showUserInput, resetChat } = useContext(ChatContext);
    const yesMessages = ['Yes, I do!', 'Yes', 'Active'];
    const noMessages = ['No', 'Not Really', 'Passive'];
    const userMessageCount = messages.reduce((count, message) => {
        if (!message.isAdmin) {
            count++;
        }
        return count;
    }, 0);

    return (
        <div className="userInput">
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
                                <Button onClick={resetChat}>Confirm</Button>
                            </div>
                            : null
                : null
            }
        </div>
    )
}

export default UserInput
