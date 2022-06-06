import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

it('renders without crashing', () => {
  const rootElement = document.createElement('div')
  const root = hydrateRoot(rootElement, <App />)
  root.unmount()
})
