import React from 'react';
import ReactDom from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalDiv = document.getElementById('modal') as HTMLElement;

  return ReactDom.createPortal(children, modalDiv);
};

export default ModalPortal;
