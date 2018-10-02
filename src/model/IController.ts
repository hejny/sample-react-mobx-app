import { IDrawingTool } from './IDrawingTool';
import { IFrame } from './IAppState';

export interface IController {
    id: string
    drawingTool: IDrawingTool
    currentFrame: null | IFrame
}
