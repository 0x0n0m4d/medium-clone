'use client';

import { ReactNode, useState } from 'react';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const toggleModal = (content?: ReactNode) => {
    setIsModalOpen(prevState => !prevState);
    if (content) setModalContent(content);
  };

  return { isModalOpen, toggleModal, modalContent };
}
