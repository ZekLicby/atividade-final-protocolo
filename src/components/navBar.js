import { theme } from '../theme';
import styled from 'styled-components';
import React from 'react'
import { GoHome, GoPerson, GoPencil } from 'react-icons/go';
import { AiOutlineFileSearch } from "react-icons/ai";
import { useRouter } from 'next/navigation';

const NavBar = () => {

    const router = useRouter()

    return (
        <Container>
            <TouchList>
                <Touch mgB={'171px'} onClick={() => router.push ('/')}>
                    <GoHome color='#FFFFFF' size={30} />
                </Touch>
                <Touch>
                    <GoPerson color='#FFFFFF' size={30} onClick={() => router.push ('/myProfile')}/>
                </Touch>
                <Touch>
                    <GoPencil color='#FFFFFF' size={30} onClick={() => router.push ('/register')}/>
                </Touch>
                <Touch>
                    <AiOutlineFileSearch color='#FFFFFF' size={30} onClick={() => router.push ('/requirement')}/>
                </Touch>
            </TouchList>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    width: 90px;
    height: 100vh;
    padding-top: 40px;
    background-color: ${theme.background};
`;

const TouchList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 45px;
`;

const Touch = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.mgB};
    cursor: pointer;
`;