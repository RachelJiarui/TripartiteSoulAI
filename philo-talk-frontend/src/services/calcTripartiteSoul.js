export async function calcTripartiteSoul(msg) {
  try {
    const response = await fetch('http://localhost:3001/calc-tripartite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ msg })
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to calculate and update tripartite table: ${errorMessage}`);
    }

    const responseData = await response.text();
    console.log(responseData); // Log the response from the server
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}