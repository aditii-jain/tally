import './App.css'
import Sidebar from './components/Sidebar'
import MaterialsView from './components/MaterialsView'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <MaterialsView />
      </main>
    </div>
  )
}

export default App
