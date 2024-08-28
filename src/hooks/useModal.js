'use client';

import { useState } from 'react';

export default function useModal(initialValue = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return [isOpenModal,openModal,closeModal];
}
