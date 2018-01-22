import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/styles.scss';

const App = () => {
    return(
        <div>Test</div>
    )
}

const mount = document.getElementById('app')
ReactDOM.render(<App/>, mount)