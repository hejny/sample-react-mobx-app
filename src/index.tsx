import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppModel } from './model/AppModel';
import { App } from './components/App/App';
import { observe } from 'mobx';
import { debounce } from 'lodash';
import { LOCALSTORAGE_SAVE_KEY } from './config';

let appModel: AppModel;

/*
try {
    appModel = AppModel.deserialize(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_SAVE_KEY)!),
    );
} catch (error) {
    console.warn(
        `Error while trying to deserialize saved state - creating new state.`,
    );
    console.warn(error);
    //todo backup
    //todo migrations
    appModel = new AppModel();
}
*/

appModel = new AppModel();

ReactDOM.render(
    <App {...{ appModel }} />,
    document.getElementById('root') as HTMLElement,
);

/*
observe(appModel.message, debounce(save, 500));

function save() {
    localStorage.setItem(
        LOCALSTORAGE_SAVE_KEY,
        JSON.stringify(appModel.serialize()),
    );
    appModel.saved = new Date();
}

*/