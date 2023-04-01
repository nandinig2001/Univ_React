import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const BACKEND_BASE_URL = 'http://127.0.0.1:8000/'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

ReactDOM.render(
  <React.StrictMode>
    <App baseUrl={BASE_URL} />
  </React.StrictMode>,
  document.getElementById('root')
);

