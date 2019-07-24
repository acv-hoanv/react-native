import React, {Fragment} from 'react';
import {RootContainer} from "./src/containers/RootContainer";
import {Provider} from 'react-redux';
import createStore from './src/state'

const store = createStore()
const App = () => {
    return (
        <Provider store={store}>
            <RootContainer/>
        </Provider>
    );
};

export default App;
