import { IAppModel } from './IAppModel';

export function createDefaultAppModel(): IAppModel {
    return {
        message: 'Hello World!',
    };
}
