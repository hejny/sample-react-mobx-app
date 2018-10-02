import { IVector3, IVector2 } from './IVectors';
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
    frames: IFrame[];
}

export interface IFrame {
    time: number;
    positionInSpace: IVector3;
    positionOnWall: IVector3 | null;
    positionOnSquare: IVector2 | null;
}
