import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';

import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div``;
const Form = styled.form``;

export default function SignUp({ user, setUser }) {
  const { email, pw, name } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(email, pw, name);
    setUser({ email: '', pw: '', name: '' });
  };

  const signUp = async (email, pw, name) => {
    try {
      const { data } = await axios.post(
        'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup',
        qs.stringify({
          email: email,
          password: pw,
          name: name,
        }),
        { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
      );
      alert('signup success');
    } catch (e) {
      console.log(e);
      alert('signup fail');
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <TextInput
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="email 입력"
        ></TextInput>

        <TextInput
          type="password"
          name="pw"
          value={pw}
          onChange={handleOnChange}
          placeholder="pw 입력"
        ></TextInput>

        <TextInput
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="name 입력"
        ></TextInput>

        <Button>가입</Button>
      </Form>
    </Container>
  );
}
