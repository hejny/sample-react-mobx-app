import { ISituationState } from '../model/ISituationState';
import { IAppState } from '../model/IAppState';
import { drawOnWallAppStateDrawing } from './drawOnWallAppStateDrawing';
import { drawOnWallSituationStateControllers } from './drawOnWallSituationStateControllers';
import { drawOnWallControls } from './drawOnWallControls';
import { IObservableObject, observe } from 'mobx';

export class WallRenderer {
    constructor(
        private appState: IAppState & IObservableObject,
        private situationState: ISituationState & IObservableObject,
    ) {
        this.render();

        observe(this.appState, () => {
            this.render();
        });
    }

    private _contexts: CanvasRenderingContext2D[];
    addContext(context: CanvasRenderingContext2D) {
        this._contexts.push(context);
    }

    private _subscribers: (() => void)[];
    subscribe(callback: () => void) {
        this._subscribers.push(callback);
    }

    private render() {
        for (const ctx of this._contexts) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //wallTextureContext.clearRect(0, 0, wallTextureContext.canvas.width, wallTextureContext.canvas.height);
            drawOnWallAppStateDrawing(ctx, this.appState.drawings);
            drawOnWallSituationStateControllers(
                ctx,
                this.situationState.controllers,
            );
            drawOnWallControls(ctx);
        }
    }
}
