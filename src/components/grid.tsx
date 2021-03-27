import { FC, Children, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import styled, { css } from 'styled-components';

import { createGrid } from 'reducers';

import { Block } from './block';

export const Grid: FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();

    const create = useCallback(() => dispatch(createGrid()), [dispatch]);

    useEffect(() => {
        create();
    }, [create]);

    return (
        <Container data-cy="grid-container">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy="grid-row">
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) => (
                                <Block rowIndex={rowIndex} colIndex={colIndex}/>
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
