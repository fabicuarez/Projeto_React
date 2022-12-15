import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes'

function App() {
  return (
      <main className="main">
        <h2 className="main-header">Agenda de Contato</h2>
        <RouterProvider router={router} /> 
      </main>
  );
}

export default App;