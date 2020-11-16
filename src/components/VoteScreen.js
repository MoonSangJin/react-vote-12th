import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from './Title';
import VoteRow from './VoteRow';

const Wrapper = styled.div`
  height: 100vh;
`;

export default function VoteScreen() {
  const [candidates, setCandidates] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates'
      );
      data.sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
      setCandidates(data);
    } catch (e) {
      console.log(e);
      alert('fail to get data');
    }
  };

  useEffect(() => {
    getData();
  }, [candidates]);

  return (
    <Wrapper>
      <Title title={'13기 프론트엔드 팀장은 누구?'} fontSize="50" />
      <Title
        title={'CEOS 프론트엔드 13기 개발팀장 투표 창입니다'}
        fontSize="30"
      />
      {candidates &&
        candidates.map((candidate, index) => {
          return (
            <VoteRow key={index} candidate={candidate} order={index}></VoteRow>
          );
        })}
    </Wrapper>
  );
}
