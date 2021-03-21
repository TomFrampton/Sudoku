import { FC, Children } from 'react';


export const Grid: FC = () => {
    return (
        <div data-cy="grid-container">
            {Children.toArray([...Array(9)].map((_, rowIndex) => (
                <div data-cy="grid-row">
                    {Children.toArray([...Array(9)].map((_, colIndex) => (
                        <span data-cy="grid-block">
                            {(rowIndex * 9) + colIndex} &nbsp;
                        </span>
                    )))}
                </div>
            )))}
        </div>
    )
}

