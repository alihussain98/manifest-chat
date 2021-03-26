import React, { useState, createContext, useEffect } from 'react';
import uuid from 'react-uuid';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {

    const [messages, setMessages] = useState([]);
    const [showUserInput, setShowUserInput] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const pendingMessages = [
        [
            { message: "Hi! I am Henry, your personal transfer specialist.", id: uuid(), isAdmin: true },
            { message: "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!", id: uuid(), isAdmin: true },
            { message: "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "Some retirememnt plans allow you to take out loans. Is this feature important to you?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "There are 2 types of investors: 1) Active investors prefer to frequently monitor their investment choices, adjust allocations, and follow the market. 2) Passive investors like their investments to be managed for them", id: uuid(), isAdmin: true },
            { message: "Which one best describes you?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "We are required by your provider to collect some identity information.", id: uuid(), isAdmin: true },
            { message: "What is your Date of birth?", id: uuid(), isAdmin: true }
        ],
        [
            { message: "Thankyou for walking me through your preferences, this will make it much easier for us to choose the right destination for you.", id: uuid(), isAdmin: true }
        ]
    ];

    const addNextAdminMessage = () => {
        setIsLoading(true);
        setShowUserInput(false);
        setTimeout(() => {
            setIsLoading(false);
            setShowUserInput(true);
            setMessages(messages => {
                const userMessageCount = messages.reduce((count, message) => {
                    if (!message.isAdmin) {
                        count++;
                    }
                    return count;
                }, 0);
                return [
                    ...messages,
                    ...pendingMessages[userMessageCount]
                ]
            })
        }, 2000);
    }

    useEffect(() => {
        addNextAdminMessage();
    }, []);

    const userClickedYes = (userMessage) => {
        setMessages(messages => [
            ...messages,
            { message: userMessage, id: uuid(), isAdmin: false }
        ]);
        addNextAdminMessage();
    }

    const userClickedNo = (userMessage) => {
        setMessages(messages => [
            ...messages,
            { message: userMessage, id: uuid(), isAdmin: false }
        ]);
        addNextAdminMessage();
    }

    const deleteMessages = (id) => {
        const index = messages.findIndex(message => message.isAdmin === false && message.id === id);
        setMessages(messages => messages.slice(0, index));
    }

    const userSelectedDate = (day) => {
        setMessages(messages => [
            ...messages,
            { message: day.toLocaleDateString(), id: uuid(), isAdmin: false }
        ]);
        addNextAdminMessage();

    }

    const resetChat = () => {
        setMessages([]);
        addNextAdminMessage();
    }

    return (
        <ChatContext.Provider value={{ messages, resetChat, userSelectedDate, userClickedYes, userClickedNo, deleteMessages, isLoading, showUserInput }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;