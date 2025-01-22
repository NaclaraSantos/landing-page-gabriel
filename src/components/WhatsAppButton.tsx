
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Olá, gostaria de mais informações sobre os serviços do Dr. Gabriel Couto."
  );
  const phoneNumber = "5531973499681"; // Replace with actual phone number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg  hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;