import { FC, Children, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import useMousetrap from 'react-hook-mousetrap';
import styled, { css } from 'styled-components';

import { createGrid, IReducerState, selectBlock } from 'reducers';
import { BLOCK_COORDS, INDEX } from 'typings/numbers';

import { Block } from './block';

interface IState {
    selectedBlock?: BLOCK_COORDS
}

export const Grid: FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    const state = useSelector<IReducerState, IState>(({ selectedBlock }) => ({ selectedBlock }));

    const create = useCallback(() => dispatch(createGrid()), [dispatch]);

    useEffect(() => {
        create();
    }, [create]);

    function moveUp() {
        if (state.selectedBlock && state.selectedBlock.rowIndex > 0) {
            dispatch(selectBlock({
                rowIndex: state.selectedBlock.rowIndex - 1 as INDEX,
                colIndex: state.selectedBlock.colIndex
            }));
        }
    }

    function moveDown() {
        if (state.selectedBlock && state.selectedBlock.rowIndex < 8) {
            dispatch(selectBlock({
                rowIndex: state.selectedBlock.rowIndex + 1 as INDEX,
                colIndex: state.selectedBlock.colIndex
            }));
        }
    }

    function moveLeft() {
        if (state.selectedBlock && state.selectedBlock.colIndex > 0) {
            dispatch(selectBlock({
                rowIndex: state.selectedBlock.rowIndex,
                colIndex: state.selectedBlock.colIndex - 1 as INDEX
            }));
        }
    }

    function moveRight() {
        if (state.selectedBlock && state.selectedBlock.colIndex < 8) {
            dispatch(selectBlock({
                rowIndex: state.selectedBlock.rowIndex,
                colIndex: state.selectedBlock.colIndex + 1 as INDEX
            }));
        }
    }

    useMousetrap('up', moveUp);
    useMousetrap('down', moveDown);
    useMousetrap('left', moveLeft);
    useMousetrap('right', moveRight);

    return (
        <Container data-cy="grid-container">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy="grid-row">
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) => (
                                <Block rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX}/>
                            ))
                        )}
                    </Row>
                ))
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

const Row = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-flow: row;

        // Row styles
        &:nth-child(1) {
            div {
                border-top-width: ${theme.dimensions.outerBorderWidth}
            };
        }

        &:nth-child(4), &:nth-child(7) {
            div {
                border-top-width: ${theme.dimensions.innerBorderWidth}
            };
        }

        &:nth-child(9) {
            div {
                border-bottom-width: ${theme.dimensions.outerBorderWidth}
            };
        }

        // Column Styles
        div {
            &:nth-child(1) {
                border-left: ${theme.dimensions.outerBorderWidth} solid ${theme.colours.black};
            }

            &:nth-child(4), &:nth-child(7) {
                border-left: ${theme.dimensions.innerBorderWidth} solid ${theme.colours.black};
            }

            &:nth-child(9) {
                border-right: ${theme.dimensions.outerBorderWidth} solid ${theme.colours.black};
            }
        }
    `}
`;
