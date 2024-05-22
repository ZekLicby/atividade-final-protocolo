'use client'
import React from 'react'
'use Client'
import styled from 'styled-components'
import { theme } from '../theme'

const Input = ({ holder, icon }) => {
  return (
    <Container>
      <IconArea>
        {icon}
      </IconArea>
      <InputBox
        placeholder={holder}
      />
    </Container>
  )
}

export default Input

const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const InputBox = styled.input`
    width: 330px;
    height: 48px;
    background-color: rgba(166, 166, 166, 0.1);
    border: 0;
    color: #A6A6A6;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 16px;
`;

export const IconArea = styled.div`
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;