'use client'
import { theme } from '../theme'
import React, { useState } from 'react'
import { Touch } from '../globalStyles'
import { GoArrowDown, GoPerson, GoSearch } from 'react-icons/go'
import styled from 'styled-components'

const Header = ({ title, headerKey }) => {

    return (
        <Container>
            <Title>{title}</Title>
            {
                headerKey === 'consult'
                    ?
                    <Consult>
                        <DropDown>
                            <Selected>Todos os departamentos</Selected>
                            <GoArrowDown size={20} color='black'/>
                        </DropDown>
                        <ButtonGroup>
                            <Touch>
                                <GoSearch size={25} color='#000000'/>
                            </Touch>
                            <Touch>
                                <GoPerson size={25} color='#000000'/>
                            </Touch>
                        </ButtonGroup>
                    </Consult>
                    :
                    null
            }
            {
                headerKey === 'register'
                    ?
                    <Protocol>858392 - Protocolo</Protocol>
                    :
                    null
            }
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.darkGray};
`;

const Consult = styled.div`
    display: flex;
    align-items: center;
    gap: 67px;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 500;
    color: #000000;
`;

const DropDown = styled.div`
    width: 330px;
    height: 37px;
    background-color: ${theme.dakerGray};
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 43px;
`;

export const Protocol = styled.p`
    color: black;
`;

const Selected = styled.p`
    color: black;
`;