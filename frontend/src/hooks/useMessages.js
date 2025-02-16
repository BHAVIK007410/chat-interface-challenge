import { useState } from 'react';

const API_URL = 'http://localhost:8000/api/generate-response'; // Your Laravel backend URL

const useMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMessages = async () => {
        // Fetch previous messages if needed
    };

    const sendMessage = async (message) => {
        if (!message.trim()) return; // Don't send empty messages

        // Add the user's message to the messages state
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, sender: 'user' },
        ]);

        // Call the Laravel API to get the response
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Failed to get AI response');
            }

            const data = await response.json();

            // Add the AI's reply to the messages state
            const aiReply = data.response;

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: aiReply, sender: 'ai' },
            ]);
        } catch (err) {
            setError('Error generating AI response');
        } finally {
            setLoading(false);
        }
    };

    return {
        messages,
        sendMessage,
        loading,
        error,
        fetchMessages,
    };
};

export default useMessages;
