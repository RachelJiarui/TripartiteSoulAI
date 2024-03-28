export async function fetchMessages() {
  try {
    const response = await fetch('http://localhost:3001/messages');

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    const messages = await response.json();
    return messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}
