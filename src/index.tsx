import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createDefaultAppModel } from './model/createDefaultAppModel';
import { App } from './view/App/App';
import { observe, observable } from 'mobx';
import { debounce } from 'lodash';
import { LOCALSTORAGE_SAVE_KEY } from './config';
import { IAppModel } from './model/IAppModel';

let appModel: IAppModel;

try {
    const appModelSerialized = localStorage.getItem(LOCALSTORAGE_SAVE_KEY);
    if (!appModelSerialized) {
        throw new Error(
            `In localStorage is not value ${LOCALSTORAGE_SAVE_KEY}.`,
        );
    }
    appModel = JSON.parse(appModelSerialized);
} catch (error) {
    console.warn(
        `Error while trying to deserialize saved state - creating new state.`,
    );
    console.warn(error);
    //todo backup
    //todo migrations
    appModel = createDefaultAppModel();
}

appModel = observable(appModel);

ReactDOM.render(<App {...{ appModel }} />, document.getElementById(
    'root',
) as HTMLElement);

observe(appModel, debounce(save, 500));

function save() {
    localStorage.setItem(LOCALSTORAGE_SAVE_KEY, JSON.stringify(appModel));
    //todo appModel.saved = new Date();
}
