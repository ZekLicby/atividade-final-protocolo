import { theme } from "../../theme";

const { default: styled } = require("styled-components");

export const Area = styled.div`
    width: 90%;
`;

export const AreaTitle = styled.div`
    width: 90%;
    margin: 30px 0;
`;

export const PageTitle = styled.p`
    color: black;
    font-size: 22px;
`;

export const RequirementContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const RequirementArea = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${theme.darkGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
`;

export const Number = styled.p`
    color: black;
`;

export const Date = styled.p`
    color: black;
`;

export const Pagination = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 5.5px;
    margin-top: 10px;
`;

export const PageNumber = styled.p`
    color: black;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
`;