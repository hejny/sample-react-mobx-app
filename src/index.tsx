import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './view/App/App';
import { saveAppStateAfterChange } from './controller/saver/saveAppStateAfterChange';
import { restoreAppState } from './controller/saver/restoreAppState';

const appState = restoreAppState();
saveAppStateAfterChange(appState);

ReactDOM.render(<App {...{ appState }} />, document.getElementById(
    'root',
) as HTMLElement);
