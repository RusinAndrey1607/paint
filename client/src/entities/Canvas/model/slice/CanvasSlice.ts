import { createSlice } from "@reduxjs/toolkit";
import { CanvasSchema } from "../types/CanvasSchema";

export const initialState: CanvasSchema = {
  canvas: undefined,
  context: undefined,
  redoList: [],
  undoList: [],
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
export const { actions: canvasActions } = canvasSlice;
export const { reducer: canvasReducer } = canvasSlice;
