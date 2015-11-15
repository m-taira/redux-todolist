import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import todApp from './reducers/todo'

let store = createStore(todApp);

let rootElement;

document.addEventListener('DOMContentLoaded', () => {
  rootElement = document.getElementById('container');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
})