import { createRoot } from 'react-dom/client'
import './styles/global.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)