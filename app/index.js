import React from 'react'
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';
import 'flex-grid-sass/dist/flex-grid-sass.css'



ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);
if (module.hot) {
  module.hot.accept('./root', () => {
    const NewRoot = require('./root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}