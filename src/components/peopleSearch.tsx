// src/components/PeopleSearch.tsx
import { useState } from 'react'
import { searchPeopleByName, fetchGenome } from '../services/torre'
import ProfileModal from './ProfileModal'


type Person = {
    id: string
    name: string
    imageUrl: string
    username: string
}

export default function PeopleSearch() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Person[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState<any>(null)

    const handleSearch = async () => {
        if (!query.trim()) return
        setLoading(true)
        try {
            const people = await searchPeopleByName(query)
            console.log(people[0]);

            setResults(people)
        } catch (err) {
            console.error('Error fetching:', err)
        } finally {
            setLoading(false)
        }
    }

    const handlePersonClick = async (username: string) => {
        try {
            const genome = await fetchGenome(username)
            setSelectedPerson(genome)
        } catch (err) {
            console.error('Error loading profile:', err)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Torre People Search</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter name"
                    className="w-full border px-4 py-2 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            {loading && <p className="mt-4 text-center">Loading...</p>}

            <ul className="mt-6 space-y-4">
                {results.map(person => (
                    <li key={person.id || person.username} onClick={() => handlePersonClick(person.username)} className="flex items-center gap-4 border p-4 rounded shadow">
                        <img src={person.imageUrl?.trim()
                            ? person.imageUrl
                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&rounded=true`} alt={person.name} className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="font-semibold">{person.name}</p>
                            <p className="text-gray-500">@{person.username}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {selectedPerson && <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />}

        </div>
    )
}
