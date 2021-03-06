import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

import actionCable from 'actioncable'
const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://192.168.2.214:3000/game`)

ReactDOM.render(<App cableApp={CableApp} />, document.getElementById('root'))
registerServiceWorker()
