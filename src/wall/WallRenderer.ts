import { IVector2 } from './../model/IVectors';
import { ISituationState } from '../model/ISituationState';
import { IAppState } from '../model/IAppState';
import { drawOnWallAppStateDrawing } from './drawOnWallAppStateDrawing';
import { drawOnWallSituationStateControllers } from './drawOnWallSituationStateControllers';
//import { drawOnWallControls } from './drawOnWallControls';
import { IObservableObject, observe } from 'mobx';

export class WallRenderer {

    private ctx: CanvasRenderingContext2D;

    constructor(
        private appState: IAppState & IObservableObject,
        private situationState: ISituationState & IObservableObject,
        quality: IVector2
    ) {

        const canvas = document.createElement('canvas');
        canvas.width  = quality.x;
        canvas.height = quality.y;
        this.ctx = canvas.getContext('2d')!;

        this.render();

        /*this.render();

        observe(this.appState, () => {
            this.render();
        });*/
    }

    private _contexts: CanvasRenderingContext2D[];
    addContext(context: CanvasRenderingContext2D) {
        this._contexts.push(context);
    }

    private _subscribers: (() => void)[];
    subscribe(callback: () => void) {
        this._subscribers.push(callback);
    }
    private callSubscribers(){
        for(const subscriber of this._subscribers){
            subscriber();
        }
    }

    private render() {
        
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //wallTextureContext.clearRect(0, 0, wallTextureContext.canvas.width, wallTextureContext.canvas.height);
        drawOnWallAppStateDrawing(this.ctx, this.appState.drawings);
        drawOnWallSituationStateControllers(
            this.ctx,
            this.situationState.controllers,
        );
        //drawOnWallControls(this.ctx);

        for (const ctx of this._contexts) {
            //todo is canvas starting from 0,0 or 1,1
            ctx.drawImage(this.ctx.canvas,0,0,this.ctx.canvas.width,this.ctx.canvas.height,0,0,ctx.canvas.width,ctx.canvas.height);
        }

        this.callSubscribers();

        requestAnimationFrame(()=>this.render());
    }
}
