import { IAppState } from './../../model/IAppState';
import { MaterialFactory } from './../MaterialFactory';
import * as BABYLON from 'babylonjs';
import { createScene } from './createScene';
import { createLights } from './createLights';
import { createGround } from './createGround';
import { createSkybox } from './createSkybox';

export default class World {
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public webVR: boolean;
    public lights: BABYLON.Light[];
    public groundMesh: BABYLON.AbstractMesh;
    public skyboxMesh: BABYLON.AbstractMesh;
    public materialFactory: MaterialFactory;
    public VRHelper: BABYLON.VRExperienceHelper;

    constructor(
        public canvasElement: HTMLCanvasElement,
        public appState: IAppState,
    ) {}

    run() {
        this.engine = new BABYLON.Engine(this.canvasElement, true, {
            //preserveDrawingBuffer: true,
        });

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener('resize', () => {
            this.engine.resize();
        });

        this.scene = createScene(this.engine);
        this.lights = createLights(this.scene);
        this.materialFactory = new MaterialFactory(this);
        this.groundMesh = createGround(this.scene, this.materialFactory);
        this.skyboxMesh = createSkybox(this.scene);

        this.VRHelper = this.scene.createDefaultVRExperience();


        this.VRHelper.onControllerMeshLoadedObservable.add((controller)=>{
            console.log('Controller loaded.',controller);


            const box = BABYLON.Mesh.CreateBox('skyBox', 1, this.scene);


            controller.onTriggerStateChangedObservable.add((gamepadButton)=>{
                
                console.log('Trigger state changed.',gamepadButton);


                
                box.position = controller.position.clone();



             });



        });

        /*
        (this.VRHelper.currentVRCamera as BABYLON.WebVRFreeCamera).onControllersAttachedObservable.add((x)=>{
            console.log('onControllersAttachedObservable',x);
        });

        
        (this.VRHelper.currentVRCamera as BABYLON.WebVRFreeCamera).onControllerMeshLoadedObservable.add((x)=>{
            console.log('onControllerMeshLoadedObservable',x);
        });*/
    
    }


    //todo set controlls
    //todo create world


    dispose() {
        this.scene.dispose(); //todo is it all?
    }
}
