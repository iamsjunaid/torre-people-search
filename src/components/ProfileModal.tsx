// src/components/ProfileModal.tsx
import { AiOutlineCheck } from "react-icons/ai";

interface Person {
    name: string;
    professionalHeadline: string;
    publicId: string;
    picture: string;
    completion: number;
    verified: boolean;
}

interface Strength {
    id: string;
    name: string;
}

interface Education {
    name: string;
    fromYear: string;
    toYear: string;
    ongoing: boolean;
}

interface PersonData {
    person: Person;
    strengths?: Strength[];
    education?: Education[];
}

type Props = {
    person: PersonData;
    onClose: () => void;
};

export default function ProfileModal({ person, onClose }: Props) {
    if (!person) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-40">
            {/* Sidebar */}
            <div className="w-full max-w-md h-full bg-white shadow-xl flex flex-col overflow-y-auto rounded-l-2xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-3xl font-light focus:outline-none"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Profile Header */}
                <div className="flex flex-col items-center pt-10 pb-6 px-6 border-b border-gray-100 bg-gray-50 rounded-tl-2xl">
                    <div className="relative mb-3">
                        <img
                            src={person.person.picture?.trim() ? person.person.picture : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.person.name)}&background=random&rounded=true`}
                            alt={person.person.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        {person.person.verified && (
                            <span className="absolute bottom-0 right-0 bg-green-100 border-2 border-white rounded-full p-1">
                                <AiOutlineCheck className="text-green-500 text-lg" />
                            </span>
                        )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-center mb-1">{person.person.name}</h2>
                    <p className="text-gray-500 text-sm mb-1">@{person.person.publicId}</p>
                    {person.person.professionalHeadline && (
                        <p className="text-gray-600 text-center text-sm mb-2">{person.person.professionalHeadline}</p>
                    )}
                    <div className="flex gap-2 mt-2">
                        <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                            Profile {Math.round(person.person.completion * 100)}% complete
                        </span>
                        {person.person.verified && (
                            <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                                <AiOutlineCheck className="inline text-green-500" /> Verified
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="flex-1 px-6 py-6 space-y-6">
                    {/* Strengths */}
                    {person.strengths && person.strengths.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-gray-800 mb-2 text-base">Strengths</h3>
                            <div className="flex flex-wrap gap-2">
                                {person.strengths.map((s: Strength) => (
                                    <span
                                        key={s.id}
                                        className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium"
                                    >
                                        {s.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {person.education && person.education.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-gray-800 mb-2 text-base">Education</h3>
                            <ul className="space-y-2">
                                {person.education.map((edu: Education, i: number) => (
                                    <li key={i} className="flex flex-col">
                                        <span className="font-medium text-gray-900 text-sm">{edu.name}</span>
                                        <span className="text-xs text-gray-500">
                                            {edu.ongoing ? 'Ongoing' : `${edu.fromYear}–${edu.toYear}`}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={onClose}></div>
        </div>
    );
}
