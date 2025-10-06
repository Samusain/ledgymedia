import Main from './components/Main/Main'
import MainLayout from './components/Mainlayout/Layout';
import './App.css';

function App() {
  return (
      <div className="app">
        <MainLayout>
          <Main />
        </MainLayout>
      </div>
  );
}

export default App;