import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Wrapper = styled.div`
  height: 100vh;
`;
export default function VoteScreen() {
  return (
    <Wrapper>
      <Title title={'13기 프론트엔드 팀장은 누구?'} fontSize="50" />
      <Title title={'CEOS 프론트엔드 13기 개발팀장 투표 창입니다'} />
    </Wrapper>
  );
}
