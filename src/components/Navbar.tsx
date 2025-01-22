import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Scale } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-semibold">Gabriel Couto</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-gray-600">Início</a>
            <a href="#about" className="text-gray-800 hover:text-gray-600">Sobre</a>
            <a href="#services" className="text-gray-800 hover:text-gray-600">Serviços</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">Contato</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-800 hover:text-gray-600">Início</a>
            <a href="#about" className="block py-2 text-gray-800 hover:text-gray-600">Sobre</a>
            <a href="#services" className="block py-2 text-gray-800 hover:text-gray-600">Serviços</a>
            <a href="#contact" className="block py-2 text-gray-800 hover:text-gray-600">Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;