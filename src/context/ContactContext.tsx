import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ContactContextType {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ContactContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactProvider');
  }
  return context;
}
