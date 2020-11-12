import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
`;
export default function VoteButton({ vote }) {
  return <Button onClick={vote}>투표</Button>;
}
