import React from 'react'
import { AuthProvider } from "./ContextReducer";
import Login from './Login'
import styled from 'styled-components'

const LoginWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`


export default function App() {
    return (
      <AuthProvider>
          <LoginWrapper>
        <Login />
          </LoginWrapper>
      </AuthProvider>
    );
  }
