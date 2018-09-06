import { observable } from 'mobx';

interface IAppModelSerialized{
    message: string;
}

export class AppModel {
    @observable message:string = 'Hello world';

    static deserialize(source: IAppModelSerialized) {
        const appModel = new AppModel();
        appModel.message = source.message;
        return appModel;
    }

    serialize(): IAppModelSerialized {
        return {
            message: this.message,
        };
    }

}
