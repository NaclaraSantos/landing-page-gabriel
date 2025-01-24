import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>+55 (31) 975678257</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>advgabrielcouto@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Rua Marlene Alevato Ferrari, 16, Loja 02, Oswaldo Barbosa Pena II, em Nova Lima/MG - CEP 34002-068</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Áreas de Atuação</h3>
              <ul className="space-y-2">
                <li>Direito Civil</li>
                <li>Direito Trabalhista</li>
                <li>Direito do Consumidor</li>
                <li>Fazenda Pública</li>
                <li>Direito Bancário</li>
                <li>Direito de Sucessão</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <p>Segunda a Sexta</p>
              <p>09:00 - 18:00</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Gabriel Couto Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;