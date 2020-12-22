import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 10px;
`;
const votePageTitle = ({ title, fontSize }) => {
  return <Title {...{ fontSize }}>{title}</Title>;
};
export default votePageTitle;
