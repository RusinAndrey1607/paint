export interface CanvasSchema {
    canvas?:HTMLCanvasElement,
    context?:CanvasRenderingContext2D,
    undoList:string[],
    redoList:string[],
}
