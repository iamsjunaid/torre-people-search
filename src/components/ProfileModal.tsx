// src/components/ProfileModal.tsx
type Props = {
    person: any
    onClose: () => void
}

export default function ProfileModal({ person, onClose }: Props) {
    if (!person) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
            <div className="bg-white max-w-xl w-full rounded-lg shadow-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    ×
                </button>
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={
                            person.person.picture ||
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                person.person.name
                            )}&background=random&rounded=true`
                        }
                        alt={person.person.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{person.person.name}</h2>
                        <p className="text-sm text-gray-600">@{person.person.username}</p>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="font-semibold">Strengths:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {person.strengths?.map((s: any) => (
                            <span
                                key={s.id}
                                className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded"
                            >
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Education:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                        {person.education?.map((edu: any, i: number) => (
                            <li key={i}>
                                {edu.name} ({edu.ongoing ? 'Ongoing' : `${edu.fromYear}–${edu.toYear}`})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
