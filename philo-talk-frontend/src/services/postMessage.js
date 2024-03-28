export async function postMessage(msg) {
  try {
    const response = await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    });

    if (!response.ok) {
      throw new Error('Failed to post message');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting message:', error);
    throw error;
  }
}
