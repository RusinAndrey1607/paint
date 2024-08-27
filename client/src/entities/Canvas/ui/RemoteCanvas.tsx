import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import React, { FC, useEffect, useRef } from 'react';
import { canvasActions } from '../model/slice/CanvasSlice';

type RemoteCanvasProps = {};

export const RemoteCanvas: FC<RemoteCanvasProps> = () => {
    const canvasRef = useRef(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (canvasRef.current) {
            dispatch(canvasActions.setCanvas(canvasRef.current));
        }
    }, [dispatch]);
    return (
        <div className="flex justify-center">
            RemoteCanvas
            <canvas
                className="bg-white border border-black "
                ref={canvasRef}
                width={800}
                height={600}
            />
        </div>
    );
};
