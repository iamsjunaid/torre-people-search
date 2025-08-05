// src/services/torre.ts
const API_BASE_URL = `https://torre-people-search.onrender.com`

export async function searchPeopleByName(name: string) {
    try {
        const response = await fetch(`https://torre.ai/api/entities/_searchStream`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: name,
                limit: 10
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
            throw new Error('No response body');
        }

        let result = '';
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, { stream: true });
        }

        // Parse the streaming response
        const lines = result.trim().split('\n');
        const people = lines
            .filter(line => line.trim())
            .map(line => {
                try {
                    return JSON.parse(line);
                } catch {
                    console.warn('Failed to parse line:', line);
                    return null;
                }
            })
            .filter(Boolean);

        return people;
    } catch (error) {
        console.error('Error searching people:', error);
        throw error;
    }
}

export async function fetchGenome(username: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/genome/${username}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching genome:', error);
        throw error;
    }
}
