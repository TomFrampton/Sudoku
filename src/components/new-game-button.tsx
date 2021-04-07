import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { createGrid } from 'reducers';
import { Button } from 'styles';

export const NewGameButton: FC = () => {
    const dispatch = useDispatch<Dispatch<Action>>();

    const startNewGame = useCallback(() => {
        if (window.confirm('Are you sure you want to start a new game?')) {
            dispatch(createGrid());
        }
    }, [dispatch]);

    return <Button onClick={startNewGame}>New Game</Button>;
};