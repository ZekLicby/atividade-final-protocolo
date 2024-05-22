'use client'
const { default: styled } = require("styled-components");

export const InputGroup = styled.div`
    gap: 24px;
    display: flex;
    flex-direction: column;
`;

export const ForgotPassword = styled.p`
    color: #A6A6A6;
    text-decoration: underline;
    :hover {
        cursor: pointer;
    }
`;

export const TitleArea = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 32px;
`;