import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize}px;
`;
export default ({ title, fontSize = '50' }) => {
  return <Title fontSize={fontSize}>{title}</Title>;
};
