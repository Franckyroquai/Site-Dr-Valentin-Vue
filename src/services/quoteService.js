export async function getPepoQuote() {
    const response = await fetch('/pepo', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return await response.json();
}

