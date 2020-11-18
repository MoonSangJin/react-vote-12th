import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';

import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div``;
const Form = styled.form``;

export default function SignUp({ login, setLogin, setLoginCheck }) {
  const { email, pw } = login;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(email, pw);
    setLogin({ email: '', pw: '' });
  };

  const signUp = async (email, pw) => {
    try {
      const { data } = await axios.post(
        'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        qs.stringify({
          email: email,
          password: pw,
        }),
        { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
      );
      axios.defaults.headers.common['Authorization'] = data;
      setLoginCheck(true);
    } catch (e) {
      console.log(e);
      alert('login fail');
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
        <Button>로그인</Button>
      </Form>
    </Container>
  );
}
