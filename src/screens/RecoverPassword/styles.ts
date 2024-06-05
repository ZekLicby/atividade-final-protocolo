'use client'

import { theme } from "../../theme";

const { default: styled } = require("styled-components");

export const TitleArea = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap};
    margin-bottom: 60px;
`;