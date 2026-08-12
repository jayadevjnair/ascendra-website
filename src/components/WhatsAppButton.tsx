import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '919497088222';
  const defaultMessage = encodeURIComponent('Hello ASCENDRA Admissions, I am interested in knowing more about your healthcare diploma and certification courses in Kottayam.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with ASCENDRA Admissions on WhatsApp"
      title="Chat with Admissions on WhatsApp"
      id="whatsapp-floating-btn"
    >
      <MessageCircle size={32} />
    </a>
  );
};
