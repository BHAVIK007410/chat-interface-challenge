<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Handle the incoming message and return a response.
     */
    public function generateResponse(Request $request)
    {
        // Validate incoming data
        $request->validate([
            'message' => 'required|string',
        ]);

        // Get the user's message
        $userMessage = $request->input('message');

        // Generate a response (this can be replaced with actual AI logic or API calls)
        $aiResponse = $this->generateAiReply($userMessage);

        return response()->json(['response' => $aiResponse]);
    }

    /**
     * Generate a simulated AI response based on the user's message.
     */
    private function generateAiReply($message)
    {
        // Example logic for generating AI replies (you can replace it with actual AI logic or API)
        $responses = [
            'hello' => 'Hi there! How can I help you?',
            'hello hello' => 'Hi there! How can I help you?',
            'how are you?' => 'I\'m doing great, thanks for asking!',
            'help' => 'Sure! What do you need help with?',
            'can you help me with react development?' => 'Here are some react resources: \n React Documentation \n Hooks Guide \n Performance Tips',
        ];

        // Normalize the message (convert to lowercase to match responses)
        $normalizedMessage = strtolower(trim($message));

        // Return a response based on the message, or default to a generic response
        return $responses[$normalizedMessage] ?? 'Sorry, I didn\'t understand that.';
    }
}

