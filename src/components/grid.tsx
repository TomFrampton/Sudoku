import { FC, Children } from 'react';

import styled, { css } from 'styled-components';

import { Block } from './block';

import { fillGrid } from 'utils';
import { Grid as GridModel } from 'models/grid';

const before = performance.now();

for (var i = 0; i < 100; i++) {
    // Hard grid
    let grid = new GridModel([
        [0, 0, 0, 0, 7, 4, 3, 1, 6],
        [0, 0, 0, 6, 0, 3, 8, 4, 0],
        [0, 0, 0, 0, 0, 8, 5, 0, 0],
        [7, 2, 5, 8, 0, 0, 0, 3, 4],
        [0, 0, 0, 0, 3, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 2, 7, 9, 8],
        [0, 0, 8, 9, 4, 0, 0, 0, 0],
        [0, 4, 0, 0, 8, 5, 9, 0, 0],
        [9, 7, 1, 3, 2, 6, 4, 8, 5]
    ]);

    fillGrid(grid);
    console.log(grid);

    // if (!grid.isComplete()) {
    //     throw new Error();
    // }
}

const after = performance.now();

console.log(`Time taken: ${after - before}`);

export const Grid: FC = () => {
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
