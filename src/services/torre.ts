// src/services/torre.ts
export async function searchPeopleByName(name: string) {
  if (!name.trim()) return [];

  const response = await fetch("https://torre.ai/api/entities/_searchStream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "torre-client",
      "X-Torre-Identity": "anonymous",
    },
    body: JSON.stringify({
      query: name,
      identityType: "person",
      limit: 5,
      meta: true,
    }),
  });

  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }

  return result
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));
}

// src/services/torre.ts
export async function fetchGenome(username: string) {
  const res = await fetch(`https://torre.ai/api/genome/bios/${username}`);

  if (!res.ok) throw new Error("Failed to fetch genome");

  return res.json();
}
