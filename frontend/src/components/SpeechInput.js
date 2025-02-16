import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import debounce from 'lodash.debounce';

const SpeechInput = ({ onSpeech }) => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    // Debounce the API call to avoid calling it multiple times
    const debouncedOnSpeech = debounce((transcript) => {
        onSpeech(transcript); // Call your API or handle speech here
    }, 1000); // Adjust the debounce delay as needed (1000 ms = 1 second)

    useEffect(() => {
        if (transcript) {
            debouncedOnSpeech(transcript); // Debounced API call
        }
    }, [transcript, debouncedOnSpeech]); // Only update when transcript changes

    const handleStop = () => {
        // Stop speech recognition and reset the transcript if needed
        SpeechRecognition.stopListening();
        resetTranscript(); // Optional: Reset the transcript after stopping listening
    };

    return (
        <div>
            <button className="speech-start-btn" onClick={SpeechRecognition.startListening}>Start Speech Recognition</button>
            <button className="speech-stop-btn" onClick={handleStop}>Stop</button>
            <p>{listening ? 'Listening...' : 'Not listening'}</p>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechInput;
