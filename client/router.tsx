/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Connect from '../client/components/Connect'
import Callback from '../client/components/Callback'
import GCallback from './components/GCallback'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<App />} />
      <Route path="connect" element={<Connect />} />
      <Route path="callback" element={<Callback />} />
      <Route path="gCallback" element={<GCallback />} />
    </>,
  ]),
)

export default router
