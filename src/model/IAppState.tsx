import { IVector3 } from './IVectors';
import { ICorners } from './ICorners';
import { IController } from './IController';

export interface IAppState {
    name: string;
    corners: ICorners | null;
    calibrationProgress: IVector3[];
    drawings: IDrawing[];
}

export interface IDrawing {
    id: string;
    frames: IFrame[]
}

export interface IFrame{
    position: IVector3
    rotation: any
}

//todo f
//interface
