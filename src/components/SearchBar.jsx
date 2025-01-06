import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search exercises..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;