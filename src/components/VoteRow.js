import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 150px;
  margin: 10px;
`;
const Button = styled.button`
  width: 100px;
`;
export default function VoteRow({ candidate, order, setCandidates }) {
  const { id } = candidate;

  const vote = async () => {
    try {
      console.log('vote start');
      const result = await axios.get(
        `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${id}`
      );
      console.log(result.data);

      console.log('vote success');
    } catch (e) {
      console.log(e);
      console.log('vote fail');
    }
  };

  return (
    <Container>
      <Wrapper>{order + 1}위 </Wrapper>
      <Wrapper> {candidate.name}</Wrapper>
      <Wrapper>{candidate.voteCount}표 </Wrapper>
      <Button onClick={vote}>버튼</Button>
    </Container>
  );
}
