import { FC } from 'react';
import { useSelector } from 'react-redux';

import styled, { css } from 'styled-components';

import { IReducerState } from 'reducers';
import { N, INDEX } from 'typings/numbers';

interface IProps {
    rowIndex: INDEX;
    colIndex: INDEX;
}

interface IState {
    value: N;
}

export const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
    const state = useSelector<IReducerState, IState>(({ grid }) => ({
        value: grid ? grid.getValue(rowIndex, colIndex) : 0
    }));

    return (
        <Container data-cy={`grid-block-${rowIndex}-${colIndex}`}>{(state && state.value) || ''}</Container>
    );
}

const Container = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.colours.white};
        border: 1px solid ${theme.colours.black};
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;
        font-size: 20px;
        font-weight: bold;
        height: auto;
        justify-content: center;
        transition: ${theme.transition};
        user-select: none;

        &:before {
            padding-top: 100%;
            content: '';
            float: left;
        }

        &:hover {
            background-color: ${theme.colours.lightBlue};
        }
    `}
`