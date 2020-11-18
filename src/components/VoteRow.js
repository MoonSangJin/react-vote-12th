import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 150px;
  margin: 10px;
`;

export default function VoteRow({ candidate, order }) {
  const { id, name, voteCount } = candidate;
  const handleVoteCount = async () => {
    try {
      await axios.get(
        `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/vote?id=${id}`
      );
      alert(`${name}에게 투표 완료!`);
    } catch (e) {
      console.log(e);
      alert('투표 실패');
    }
  };

  return (
    <Container>
      <Wrapper>{order + 1}위 </Wrapper>
      <Wrapper> {name}</Wrapper>
      <Wrapper>{voteCount}표 </Wrapper>
      <Button onClick={handleVoteCount}>투표</Button>
    </Container>
  );
}
