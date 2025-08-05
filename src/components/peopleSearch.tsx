// src/components/PeopleSearch.tsx
import { useState } from 'react'
import { searchPeopleByName, fetchGenome } from '../services/torre'
import ProfileModal from './ProfileModal'

interface Person {
    id: string
    name: string
    imageUrl: string
    username: string
}

interface PersonData {
    person: {
        name: string
        publicId: string
        picture: string
        professionalHeadline: string
        completion: number
        verified: boolean
    }
    strengths?: Array<{ id: string; name: string }>
    education?: Array<{ name: string; fromYear: string; toYear: string; ongoing: boolean }>
}

export default function PeopleSearch() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Person[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState<PersonData | null>(null)

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

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-md mx-auto p-4">
                {/* Header */}
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Torre People Search
                </h1>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Search people..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">Searching...</p>
                    </div>
                )}

                {/* Search Results */}
                {!loading && results.length > 0 && (
                    <div className="space-y-3">
                        {results.map(person => (
                            <div 
                                key={person.id || person.username} 
                                onClick={() => handlePersonClick(person.username)}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={person.imageUrl?.trim()
                                                ? person.imageUrl
                                                : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&rounded=true&size=48`} 
                                            alt={person.name} 
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-900 truncate">
                                            {person.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                            @{person.username}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && results.length === 0 && query && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No results found for "{query}"</p>
                    </div>
                )}

                {/* Initial State */}
                {!loading && results.length === 0 && !query && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Search for people on Torre</p>
                    </div>
                )}
            </div>

            {/* Profile Modal */}
            {selectedPerson && (
                <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
            )}
        </div>
    )
}
