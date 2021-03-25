import React, { useState, createContext, useEffect } from 'react';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setMessages([
                { message: "Hi! I am Henry, your personal transfer specialist.", id: 1, isAdmin: true },
                { message: "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!", id: 2, isAdmin: true },
                { message: "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?", id: 3, isAdmin: true }
            ])
        }, 3000);
    }, []);

    const userClickedYes = (messages) => {
        setMessages([
            ...messages,
            { message: "Yes, I do", id: 4, isAdmin: false }
        ]);
    }

    const deleteMessages = (id) => {
        setMessages(messages.filter(message => message.id !== id));
    }

    return (
        <ChatContext.Provider value={{ messages, userClickedYes, deleteMessages }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;