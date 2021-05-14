import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Body from './components/body/body';

function App() {
  return (
    <div className="App mx-auto min-h-screen">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
