import styled from "styled-components";
import { theme } from "../theme";

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: white;
    align-items: flex-start;
    flex-direction: column;
    background-image: url(${(props) => props.img});
    background-size: cover;
`;

export const LogoArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 62px;
    padding: 25px 0 0 39px;
`;

export const Logo = styled.img`
    
`;

export const HeadlineArea = styled.div`
    width: 100%;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${theme.background};
`;

export const VideoArea = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid black;
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 100px;
`;

export const Button = styled.button`
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${theme.brow};
    border-radius: 8px; 
    gap: 15px;
    cursor: pointer;
    padding-left: 15px;
`;

export const ButtonTitle = styled.p`
    color: white;
    font-size: 18px;
`;