import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import styled from 'styled-components';

import { Grid } from 'models';
import { fillBlock, IReducerState } from 'reducers';
import { Button } from 'styles';
import { BLOCK_COORDS, NUMBER } from 'typings/numbers';

interface IState {
    selectedBlock?: BLOCK_COORDS;
    workingGrid?: Grid;
}

export const Numbers: FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    const state = useSelector<IReducerState, IState>(({ selectedBlock, workingGrid }) => ({ selectedBlock, workingGrid }));

    const fill = useCallback((value: NUMBER)  => {
        if (state.selectedBlock && state.workingGrid && state.workingGrid.getValue(state.selectedBlock.rowIndex, state.selectedBlock.colIndex) === 0) {
            dispatch(fillBlock(state.selectedBlock, value))
        }
    }, [dispatch, state.selectedBlock, state.workingGrid]);

    return (
        <Container>
            {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBER[]).map(value => (
                <Button key={value} onClick={() => fill(value)}>{value}</Button>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-flow: row;
`;