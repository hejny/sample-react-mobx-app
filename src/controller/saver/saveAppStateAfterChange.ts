import { IAppState } from '../../model/IAppState';
import { IObservableObject, observe } from 'mobx';
import { debounce } from 'lodash';
import { LOCALSTORAGE_SAVE_KEY } from '../../config';

export function saveAppStateAfterChange(
    appState: IAppState & IObservableObject,
) {
    observe(
        appState,
        debounce(() => {
            localStorage.setItem(
                LOCALSTORAGE_SAVE_KEY,
                JSON.stringify(appState),
            );
            //todo appModel.saved = new Date();
        }, 500),
    );
}
