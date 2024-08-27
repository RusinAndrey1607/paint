import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getAuthState } from 'features/Auth';
import { LocalCanvas, RemoteCanvas } from 'entities/Canvas';
import React, { FC } from 'react';

interface CanvasProps {

}

export const Canvas:FC<CanvasProps> = () => {
    const { isAuth } = useAppSelector(getAuthState);
    return (
        <>
            Canvas
            {isAuth ? <RemoteCanvas /> : <LocalCanvas />}

        </>
    );
};
