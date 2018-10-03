import { ISituationState } from './../model/ISituationState';
import { IAppState } from './../model/IAppState';
import { drawOnWallAppStateDrawing } from './drawOnWallAppStateDrawing';
import { drawOnWallSituationStateControllers } from './drawOnWallSituationStateControllers';
import { drawOnWallControls } from './drawOnWallControls';

export function drawOnWall(
    ctx: CanvasRenderingContext2D,
    appState: IAppState,
    situationState: ISituationState,
) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //wallTextureContext.clearRect(0, 0, wallTextureContext.canvas.width, wallTextureContext.canvas.height);
    drawOnWallAppStateDrawing(ctx, appState.drawings);
    drawOnWallSituationStateControllers(ctx, situationState.controllers);
    drawOnWallControls(ctx);
}
