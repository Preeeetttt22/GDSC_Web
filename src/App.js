import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import Profile from './screens/Profile';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Text/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
