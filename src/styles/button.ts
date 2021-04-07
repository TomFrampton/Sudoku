import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.colours.black};
        border: 2px solid ${theme.colours.black};
        border-radius: 4px;
        color: ${theme.colours.white};
        cursor: pointer;
        display: flex;
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        height: 40px;
        justify-content: center;
        margin: 4px 2px;
        min-height: 40px;
        opacity: 0.9;
        padding: 0;
        transition: ${theme.transition};

        &:focus {
            border-color: ${theme.colours.blue};
            outline: none;
        }

        &:hover {
            opacity: 0.6;
        }
    `}
`;