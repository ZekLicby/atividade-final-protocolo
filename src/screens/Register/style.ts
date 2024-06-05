import { theme } from "../../theme";

const { default: styled } = require("styled-components");

export const Area = styled.div`
    width: 90%;
    height: 100%;
`;

export const AreaTitle = styled.p`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ButtonRegister = styled.button`
    border: 0;
    width: 276px;
    height: 84px;
    background-color: ${theme.brow};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonTitle = styled.p`
    font-size: 30px;
    color: #FFFFFF;
`;

export const Logo = styled.img`
    width: 126px;
    height: 122px;
`;

export const ButtonSelectArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 100px;
`;

export const RegisterButton = styled.button`
    width: 791px;
    height: 149px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
`;

export const RegisterButtonTitle = styled.p`
    text-transform: uppercase;
    color: ${theme.background};
    font-size: 32px;
    font-weight: 600;
`;

export const ButtonText = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #000000;
`;

export const SendButtonArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const SendButton = styled.button`
    width: 442px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${theme.background};
    border-radius: 10px;
`; 

export const SendButtonTitle = styled.p`
    font-size: 40px;
    color: #FFFFFF;
`;

export const Title = styled.p`
    font-size: 27px;
    color: #000000;
`;

export const FormsArea = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: ${props => props.gap || '35%'};
`;

export const InputArea = styled.div`

`;

export const InputTitle = styled.p`
    color: #000000;
    font-weight: 500;
    font-size: 18px;
`;

export const FormInput = styled.input`
    width: ${(props) => props.width || '340px'};
    height: ${props => props.height || '44px'};
    border: 1px solid ${theme.dakerGray};
    background-color: rgba(166, 166, 166, 0.1);
    border-radius: 4px;
    color: #000000; 
    word-wrap: break-word;
    padding-left: 2px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const FormButton = styled.button`
    width: 110px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${props => props.color};
    border-radius: 2px;
    cursor: pointer;
`;

export const FormButtonText = styled.p`
    font-size: #FFFFFFFF;
`;