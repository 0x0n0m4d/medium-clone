'use client';

import { ReactNode, useState } from 'react';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const setModalOpen = (isOpen: Boolean, content?: ReactNode) => {
    setIsModalOpen(isOpen);
    if (content) setModalContent(content);
  };

  return { isModalOpen, setModalOpen, modalContent };
}
