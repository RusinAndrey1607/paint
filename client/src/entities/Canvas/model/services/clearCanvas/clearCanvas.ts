import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const clearCanvas = createAsyncThunk(
    'canvas/clearCanvas',
    async (_, { getState }) => {
        const { canvas, context } = (getState() as StateSchema).canvas;
        if (canvas && context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    },
);
