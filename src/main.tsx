import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextoProvider } from './context/contexto'
import { Principal } from './pages/Principal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextoProvider>
    <Principal />
  </ContextoProvider>,
)
