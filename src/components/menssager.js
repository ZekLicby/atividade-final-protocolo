import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const Menssager = ({ text }) => {
  return (
    <Container>
        <Text>{text}</Text>
    </Container>
  )
}

export default Menssager

const Container = styled.div`
    width: 390px;
    height: 44px;
    background-color: rgba(166, 166, 166, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 27px;
`;

const Text = styled.p`
    font-size: 16px;
    color: ${theme.green};
`;