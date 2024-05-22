'use client'
import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const Button = ({ title, press }) => {
  return (
    <Container onClick={press}>
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  )
}

export default Button

const Container = styled.button`
    width: 370px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;
    background-color: ${theme.background};
    border: 0;
    cursor: pointer;
`;

const ButtonTitle = styled.p`
    font-size: 16px;
`;