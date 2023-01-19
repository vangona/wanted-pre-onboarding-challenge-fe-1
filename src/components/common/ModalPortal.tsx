import React from 'react';
import ReactDom from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalDiv = document.getElementById('modal');

  return modalDiv ? ReactDom.createPortal(children, modalDiv) : <></>;
};

export default ModalPortal;
