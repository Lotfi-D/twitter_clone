import './App.css';
import Sidebar from './components/Sidebar';
import MiddlePage from './components/MiddlePage';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MiddlePage />
      <Widgets />
    </div>
  );
}

export default App;
