import React from 'react';
import * as Styled from '@styles/common/ModalDimmer.style';

interface ModalDimmerProps {
  closeModal: () => void;
}

const ModalDimmer = ({ closeModal }: ModalDimmerProps) => {
  return <Styled.Dimmer onClick={closeModal} />;
};

export default ModalDimmer;
