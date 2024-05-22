const { default: styled } = require("styled-components");

export const TitleArea = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap};
`;

export const InputGroup = styled.div`
    gap: 23px;
    display: flex;
    flex-direction: column;
    margin-top: 37px;
`;