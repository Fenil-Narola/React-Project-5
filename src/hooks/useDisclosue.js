import { useState } from "react";

const useDisclosue = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, serOpen] = useState(false);

  const onOpen = () => {
    serOpen(true);
  };
  const onClose = () => {
    serOpen(false);
  };
  return { onOpen, onClose, isOpen };
};

export default useDisclosue;
