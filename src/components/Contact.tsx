import React, { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_ke8bk6b', // Substitua pelo seu SERVICE_ID
          'template_wjvqdgu', // Substitua pelo seu TEMPLATE_ID
          form.current,
          'oKXZWyMJgm7RX3xiz' // Substitua pelo seu USER_ID
        )
        .then(
          () => {
            alert('Mensagem enviada com sucesso!');
          },
          (error) => {
            console.error('Erro ao enviar a mensagem:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-center mb-16">Entre em Contato</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="text-gray-600">+55 (31) 975678257</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <p className="text-gray-600">advgabrielcouto@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p className="text-gray-600">Rua Marlene Alevato Ferrari, 16, Loja 02, Oswaldo Barbosa Pena II, em Nova Lima/MG - CEP 34002-068</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <p className="text-gray-600">Segunda a Sexta: 09:00 - 18:00</p>
              <p className="text-gray-600">Consultas online disponíveis para todo Brasil</p>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
