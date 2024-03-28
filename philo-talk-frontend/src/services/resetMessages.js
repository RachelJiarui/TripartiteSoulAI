export async function resetMessages() {
  try {
    const response = await fetch('http://localhost:3001/reset-database', {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error('Failed to reset messages');
    }
  } catch (error) {
    console.error('Error posting message:', error);
    throw error;
  }
}
