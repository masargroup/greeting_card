export async function saveMessage(userName: string, urlSelected: string) {
    const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, urlSelected, message: "Generated Greeting Card" }),
    });
    return response.json();
}
