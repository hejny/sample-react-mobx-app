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
        let firstPoint = true;
        for (const frame of drawing.frames) {
            if (frame.positionOnSquare) {
                (firstPoint?ctx.moveTo:ctx.lineTo).call(
                    ctx,
                    frame.positionOnSquare.x * ctx.canvas.width, //todo ratio
                    frame.positionOnSquare.y * ctx.canvas.height,
                );
                firstPoint=false;
            }
            //console.log(point.x,point.y,point.z,wallVector);
        }

        ctx.strokeStyle = drawing.drawingTool.color;
        ctx.lineWidth = drawing.drawingTool.size;
        ctx.lineCap = 'round';
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
            ctx.beginPath();
            ctx.arc(
                controller.currentFrame.positionOnSquare.x * ctx.canvas.width, //todo ratio
                controller.currentFrame.positionOnSquare.y * ctx.canvas.height,
                controller.drawingTool.size,
                0,
                Math.PI * 2,
            );
            ctx.fillStyle = controller.drawingTool.color;
            ctx.fill();
        }

    }
}
