import { ICorners } from './../model/ICorners';
import { IDrawing } from './../model/IAppState';
import { IController } from './../model/IController';
import { convertSceneVectorToWallVector } from './convertSceneVectorToWallVector';
//todo maybe move to other dir

//todo as class and auto update with callback

export function drawOnWallAppStateDrawing(
    drawings: IDrawing[],
    corners: ICorners,
    ctx: CanvasRenderingContext2D,
) {
    for (const drawing of drawings) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (const frame of drawing.frames) {
            //console.log( point.x, point.y);
            const wallVector = convertSceneVectorToWallVector(frame, corners);
            ctx.lineTo(
                wallVector.x * ctx.canvas.width, //todo ratio
                wallVector.y * ctx.canvas.height,
            );
            //console.log(point.x,point.y,point.z,wallVector);
        }

        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }
}

export function drawOnWallSituationStateControllers(
    controllers: IController[],
    corners: ICorners,
    ctx: CanvasRenderingContext2D,
) {
    for (const controller of controllers) {
        const wallVector = convertSceneVectorToWallVector(
            controller.currentFrame,
            corners,
        );
        ctx.arc(
            wallVector.x * ctx.canvas.width, //todo ratio
            wallVector.y * ctx.canvas.height,
            5,
            0,
            Math.PI * 2,
        );
        ctx.fillStyle = 'red';
        ctx.fill();
    }
}
