import { IVector2 } from '../model/IVectors';

export function drawCircle(
    ctx: CanvasRenderingContext2D,
    position: IVector2,
    size: number,
    color: string,
    //todo maybe border options
) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
}
