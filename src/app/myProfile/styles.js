const { default: styled } = require("styled-components");
import { theme } from "../../theme";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    align-items: center;
`;

export const Profile = styled.div`
    width: 95%;
    height: 80%;
    border: 1px solid black;
    margin-top: 33px;
    padding-left: 75px;
    padding-top: 44px;
    padding-right: 41px;
`;

export const BackButtonArea = styled.div`
    width: 95%;
    display: flex;
    align-items: flex-start;
    margin-top: 41px;
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 500;
    color: #000000;
`;

export const Logo = styled.img`
    width: 126px;
    height: 122px;
`;

export const Info = styled.div`
    margin-top: 45px;
    display: flex;
    gap: 200px;
`;

export const InfoGroup = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

export const Infos = styled.li`
`;

export const InfoTitle = styled.span`
    font-size: 35px;
    font-weight: 500;
    color: #000000;
`;

export const InfoText = styled.p`
    font-size: 30px;
    color: #000000;
`;

export const Button = styled.button`
    width: 400px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.blue};
    border: none;
    margin-top: 78px;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    color: #FFFFFF;
    font-size: 35px;
`;

export const InputGroup = styled.div`

`;

export const InputTitle = styled.p`
    font-size: 25px;
    color: #000000;
    margin-bottom: 2.5px;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: 50px;
    background-color: rgba(166, 166, 166, 0.1);
    border: 1px solid ${theme.gray};
    color: #000000;
    font-size: 16px;
    padding: 0 5px;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Splited = styled.div`
    display: flex;
    gap: 200px;
`;

export const ButtonGroup = styled.div`
    width: 90%;
    margin-top: 50px;
    display: flex;
    gap: 57px;
    justify-content: flex-end;
`;

export const FormButton = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.color};
    border: none;
    border-radius: 2px;
`;

export const FormButtonText = styled.p`
    font-size: 16px;
    color: #FFFFFF;
`;

export const ConfirmationMesssager = styled.div`
    width: 500px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CDDFF0;
`;

export const ConfirmationText = styled.p`
    color: ${theme.darkGreen};
    font-size: 20px;
    font-weight: 500;
`;