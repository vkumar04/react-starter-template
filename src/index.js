import React from 'react'
import {render} from 'react-dom'

const App = () => {
    return (
        <div>Hello React!</div>
    )
}

const app = document.getElementById('app')
render(<App/>, app)