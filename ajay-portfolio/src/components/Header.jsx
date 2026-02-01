import React from 'react';
import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-between">
      <h1 className="text-xl font-bold animate__animated animate__bounce">Ajay's Portfolio</h1>
      <Sun className="w-6 h-6" />
    </header>
  );
}