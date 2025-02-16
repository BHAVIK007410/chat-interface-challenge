import React, { useState, useEffect } from 'react';
import useMessages from '../hooks/useMessages';
import ChatBox from '../components/ChatBox';
import SpeechInput from '../components/SpeechInput';

const ChatPage = () => {
    const { messages, sendMessage, loading, error, fetchMessages } = useMessages();
    const [typedMessage, setTypedMessage] = useState(''); // For typing chat message

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleSpeech = (transcript) => {
        sendMessage(transcript); // Send message when speech-to-text is completed
    };

    const handleSendMessage = () => {
        if (typedMessage.trim()) {
            sendMessage(typedMessage); // Send typed message
            setTypedMessage(''); // Clear the input field after sending
        }
    };

    const handleQuickReply = (reply) => {
        sendMessage(reply); // Send quick reply when clicked
    };

    return (
        <div className="chat-page">
            {loading && <p>Loading AI response...</p>}
            {error && <p>{error}</p>}

            {/* Displaying chat messages */}
            <ChatBox messages={messages} onSendMessage={sendMessage} />

            {/* Quick Replies */}
            <div className="quick-replies">
                {['Hello', 'How are you?', 'Help'].map((reply, index) => (
                    <button
                        key={index}
                        className="quick-reply-button"
                        onClick={() => handleQuickReply(reply)}
                    >
                        {reply}
                    </button>
                ))}
            </div>

            {/* Text input for typing messages */}
            <div className="chat-input-container">
                <input
                    type="text"
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key press
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>

            {/* Speech-to-text input */}
            <SpeechInput onSpeech={handleSpeech} />
        </div>
    );
};

export default ChatPage;
