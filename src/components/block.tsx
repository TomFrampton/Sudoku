import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import styled, { css } from 'styled-components';

import { IReducerState, selectBlock } from 'reducers';
import { N, INDEX } from 'typings/numbers';

interface IProps {
    rowIndex: INDEX;
    colIndex: INDEX;
}

interface IState {
    value: N;
    isActive: boolean
}

export const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
    const state = useSelector<IReducerState, IState>(({ grid, selectedBlock }) => ({
        value: grid ? grid.getValue(rowIndex, colIndex) : 0,
        isActive: !!selectedBlock && selectedBlock.rowIndex === rowIndex && selectedBlock.colIndex === colIndex
    }));

    const dispatch = useDispatch<Dispatch<AnyAction>>();

    function handleClick() {
        if (!state.isActive) {
            dispatch(selectBlock({ rowIndex, colIndex }));
        }
    }

    return (
        <Container
            data-cy={`grid-block-${rowIndex}-${colIndex}`}
            isActive={state.isActive}
            onClick={handleClick}>
                {(state && state.value) || ''}
        </Container>
    );
}

interface IContainerProps {
    isActive?: boolean
}

const Container = styled.div<IContainerProps>`
    ${({ isActive, theme }) => css`
        align-items: center;
        background-color: ${isActive ? theme.colours.blue : theme.colours.white};
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