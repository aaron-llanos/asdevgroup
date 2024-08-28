'use client';

import './modal.scss'

import { useState } from 'react';

import { useInView } from "react-intersection-observer";

import { dynamicClass } from '@/helpers/dynamic-class';

export default function Modal({ isOpen, closeModal, children }) {
  const [animation, setAnimation] = useState('animate__fadeIn');

  const { ref: ref01, inView: inView01 } = useInView();

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const delayCloseModal = () => {
    setAnimation('animate__fadeOut')
    setTimeout(() => {
      closeModal()
      setAnimation('animate__fadeIn')
    }, 500);
  }

  return (
    <div
      onClick={closeModal}
      className={`modal ${isOpen && 'modal-open'} ${dynamicClass(inView01, `animate__animated ${animation} animate__faster`)}`}
      style={{ opacity: `${inView01 ? '1' : '0'}` }}
      ref={ref01}
    >
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <p
          onClick={delayCloseModal}
          className="modal__dialog--button-close"
        >x
        </p>
        <div className="modal__dialog--children">{children}</div>
      </div>
    </div>
  );
}
