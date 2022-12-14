import styled, { css } from 'styled-components';

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colours.white};
        margin-top: 0;
        text-align: center;
    `}
`
