import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'qs';
import { useCookies } from 'react-cookie';

import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div``;
const Form = styled.form``;

export default function SignIn({ login, setLogin, setLoginCheck }) {
  const { email, pw } = login;
  const [cookies, setCookie, removeCookie] = useCookies(['rememberToken']);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signIn(email, pw);
    setLogin({ email: '', pw: '' });
  };

  const signIn = async (email, pw) => {
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

      setCookie('rememberToken', data);

      setLoginCheck(true);
    } catch (e) {
      console.log(e);
      alert('login fail');
    }
  };

  const logOut = () => {
    removeCookie('rememberToken');
    console.log('토큰지움');
    setLoginCheck(false);
  };

  useEffect(() => {
    if (cookies.rememberToken !== undefined) {
      console.log('token존재');
      console.log(cookies.rememberToken);
      axios.defaults.headers.common['Authorization'] = cookies.rememberToken;
      setLoginCheck(true);
    } else {
      console.log('token없음');
      console.log(cookies.rememberToken);
      setLoginCheck(false);
    }
  }, [cookies.rememberToken, setLoginCheck]);

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
      <Button onClick={logOut}>로그아웃</Button>
    </Container>
  );
}
