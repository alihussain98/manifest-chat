import React, { useState, createContext, useEffect } from 'react';
import uuid from 'react-uuid';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {

    const [messages, setMessages] = useState([]);
    const [showUserInput, setShowUserInput] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pendingMessages, setPendingMessages] = useState([
        [
            { message: "Hi! I am Henry, your personal transfer specialist.", id: uuid(), isAdmin: true },
            { message: "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!", id: uuid(), isAdmin: true },
            { message: "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "Some retirememnt plans allow you to take out loans. Is this feature important to you?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "All retirememnt plans allow you to take out loans. Is this feature important to you?", id: uuid(), isAdmin: true }

        ],
        [
            { message: "DOB Random Text allow you to take out loans. Is this feature important to you?", id: uuid(), isAdmin: true }

        ]
    ]);

    const addNextAdminMessage = () => {
        setIsLoading(true);
        setShowUserInput(false);
        setTimeout(() => {
            setIsLoading(false);
            setShowUserInput(true);
            setMessages(messages => [
                ...messages,
                ...pendingMessages[0]
            ])
            console.log(messages);
            setPendingMessages(pendingMessages.slice(1));
        }, 3000);
    }

    useEffect(() => {
        addNextAdminMessage();
    }, []);



    const userClickedYes = () => {
        console.log("UserClickedYes", messages);
        setMessages(messages => [
            ...messages,
            { message: "Yes, I do", id: uuid(), isAdmin: false }
        ]);
        addNextAdminMessage();
    }

    const deleteMessages = (id) => {
        const index = messages.findIndex(message => message.isAdmin === false && message.id === id);
        setMessages(messages => messages.slice(0, index));
    }

    return (
        <ChatContext.Provider value={{ messages, userClickedYes, deleteMessages, isLoading, showUserInput }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;