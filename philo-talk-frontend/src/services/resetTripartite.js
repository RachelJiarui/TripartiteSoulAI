export async function resetTripartite() {
  try {
    const response = await fetch('http://localhost:3001/update-tripartite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({reason: 0, spirit: 0, eros: 0})
    });

    if (!response.ok) {
      throw new Error('Failed to reset tripartite');
    }
  } catch (error) {
    console.error('Error resetting tripartite:', error);
    throw error;
  }
}
