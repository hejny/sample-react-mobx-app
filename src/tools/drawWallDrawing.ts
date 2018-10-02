import { ICorners } from './../model/ICorners';
import { IDrawing } from './../model/IAppState';
import { IController } from './../model/IController';
//todo maybe move to other dir

//todo as class and auto update with callback

export function drawOnWallAppStateDrawing(
    drawings: IDrawing[],
    ctx: CanvasRenderingContext2D,
) {
    for (const drawing of drawings) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (const frame of drawing.frames) {
            if (frame.positionOnSquare) {
                ctx.lineTo(
                    frame.positionOnSquare.x * ctx.canvas.width, //todo ratio
                    frame.positionOnSquare.y * ctx.canvas.height,
                );
            }
            //console.log(point.x,point.y,point.z,wallVector);
        }

        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }
}

export function drawOnWallSituationStateControllers(
    controllers: IController[],
    ctx: CanvasRenderingContext2D,
) {
    for (const controller of controllers) {
        if (
            controller.currentFrame &&
            controller.currentFrame.positionOnSquare
        ) {
            ctx.arc(
                controller.currentFrame.positionOnSquare.x * ctx.canvas.width, //todo ratio
                controller.currentFrame.positionOnSquare.y * ctx.canvas.height,
                5,
                0,
                Math.PI * 2,
            );
        }
        ctx.fillStyle = 'red';
        ctx.fill();
    }
}
