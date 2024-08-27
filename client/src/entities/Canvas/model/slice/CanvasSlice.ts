import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CanvasSchema } from '../types/CanvasSchema';
// import { loadImage } from '../services/loadImage/loadImage';
// import { clearCanvas } from '../services/clearCanvas/clearCanvas';
// import { redo } from '../services/redo/redo';
// import { undo } from '../services/undo/undo';

export const initialState: CanvasSchema = {
    canvas: undefined,
    context: undefined,
    redoList: [],
    undoList: [],
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setCanvas(state, action: PayloadAction<any>) {
            state.canvas = action.payload;
        },
        pushToUndo(state, action: PayloadAction<string>) {
            state.undoList.push(action.payload);
        },
        pushToRedo(state, action: PayloadAction<string>) {
            state.redoList.push(action.payload);
        },
        removeFromUndo(state) {
            state.undoList.pop();
        },
        removeFromRedo(state) {
            state.redoList.pop();
        },
    },
    extraReducers(builder) {
    },
});
export const { actions: canvasActions } = canvasSlice;
export const { reducer: canvasReducer } = canvasSlice;
