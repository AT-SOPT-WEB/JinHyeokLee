import { useState } from 'react';
import { members } from '../member.js';

export const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = members.filter((member) =>
      member.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredMembers(filtered);
  };

  return { keyword, handleSearchChange, filteredMembers, handleSearch };
};
