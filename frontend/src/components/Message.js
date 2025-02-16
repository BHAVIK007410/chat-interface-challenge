const Message = ({ message }) => {
    return (
        <div className={`message ${message.from === 'user' ? 'user' : 'bot'}`}>
            <p>{message.text}</p>
        </div>
    );
};

export default Message;
