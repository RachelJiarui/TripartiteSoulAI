export async function generateResp(prompt) {
  try {
    const response = await fetch('http://localhost:3001/generate-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prompt)
    });

    if (!response.ok) {
      throw new Error('Failed to generate philosopher answer');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generate philosopher answer:', error);
    throw error;
  }
}
