import { IObservableObject } from 'mobx';
import { IAppState } from './../../model/IAppState';
import { MaterialFactory } from './../MaterialFactory';
import * as BABYLON from 'babylonjs';
import { createScene } from './createScene';
import { createLights } from './createLights';
import { createGround } from './createGround';
import { createSkybox } from './createSkybox';
import * as uuidv4 from 'uuid/v4';
import { ISituationState } from '../../model/ISituationState';

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
        public appState: IAppState & IObservableObject,
        public situationState: ISituationState & IObservableObject,
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

        this.VRHelper.onControllerMeshLoadedObservable.add((controller) => {
            const id = uuidv4();
            console.log(`Controller ${id} loaded.`, controller);
            //todo on unload
            this.appState.controllers.push({
                id,
                position: { x: 0, y: 0, z: 0 },
            });

            this.scene.registerAfterRender(() => {
                const controllerState = this.appState.controllers.find(
                    (controller) => controller.id == id,
                )!;

                controllerState.position.x = controller.mesh!.position.x; //todo better DRY
                controllerState.position.y = controller.mesh!.position.y;
                controllerState.position.z = controller.mesh!.position.z;

                //console.log(controller.mesh!.position.x);
            });

            const box = BABYLON.Mesh.CreateBox('skyBox', 0.1, this.scene);

            controller.onTriggerStateChangedObservable.add((gamepadButton) => {
                console.log('Trigger state changed.', gamepadButton);

                box.position = controller.mesh!.position.clone();
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
