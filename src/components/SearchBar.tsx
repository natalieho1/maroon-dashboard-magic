
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ placeholder = "Search...", onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md animate-fade-in">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-white/60" />
      </div>
      <input
        type="text"
        className="py-2 pl-10 pr-4 w-full rounded-md text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
