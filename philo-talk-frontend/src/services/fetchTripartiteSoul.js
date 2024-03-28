export async function fetchTripartiteSoul() {
  try {
    const response = await fetch('http://localhost:3001/fetch-tripartite');
    if (!response.ok) {
      throw new Error('Failed to fetch tripartite soul data');
    }

    const data = await response.json();
    console.log('Fetched tripartite soul: ' + JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
  }
}