import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;