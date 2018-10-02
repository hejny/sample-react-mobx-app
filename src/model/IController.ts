import { IFrame } from './IAppState';

export interface IController {
    id: string;
    currentFrame: null | IFrame;
}
