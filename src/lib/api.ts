
import { toast } from "sonner"

const API_URL = import.meta.env.VITE_OPENAI_API_URL || 'http://localhost:54321/functions/v1/chat'

export async function sendChatMessage(message: string) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.message
  } catch (error) {
    console.error('Error sending message:', error)
    toast.error('Failed to send message. Please try again.')
    throw error
  }
}