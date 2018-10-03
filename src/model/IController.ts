import { IDrawingTool } from './IDrawingTool';
import { IFrame } from './IAppState';

export interface IController {
    id: string;
    //wheelChanging: 'SIZE'|'COLOR_HUE'|'COLOR_SATURATION'|'COLOR_LIGHT';
    drawingTool: IDrawingTool;
    currentFrame: null | IFrame;
}

//const WHEEL_CHANGING_OPTIONS  = 'SIZE'|'COLOR_HUE'|'COLOR_SATURATION'|'COLOR_LIGHT';
